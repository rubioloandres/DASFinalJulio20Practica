import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataSharingService } from 'src/app/services/datasharing.service';
import { Provincia } from 'src/app/interfaces/provincia';
import { CriterioBusquedaSucursal } from 'src/app/interfaces/criterios';
import { Localidad } from 'src/app/interfaces/localidad';
import { SucursalesService } from 'src/app/services/indec/sucursales.service';
import { Sucursal } from 'src/app/interfaces/sucursal';
import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { MatChipInputEvent, MatOptionSelectionChange, MatSelectTrigger, MatSelect, MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-sucsearchfilter',
  templateUrl: './sucsearchfilter.component.html',
  styleUrls: ['./sucsearchfilter.component.css']
})
export class SucsearchfilterComponent implements OnInit, OnDestroy {

  nombreComponente = 'SucSearchfilterComponent';
  mode: FormControl = new FormControl('side');
  formFilterProvincias: FormControl = new FormControl();
  formFilterLocalidades: FormControl = new FormControl();

  private suscripcionSucursalesDeSupermercados: Subscription;

  suscripcionCanalUbicacion: Subscription;

  listaLocalidades: Localidad[] = new Array();
  listaProvincias: Provincia[] = new Array();
  listaSucursales: Sucursal[] = new Array();

  error: string;
  resetFiltroCategoria: boolean;

  ubicacionActual: Ubicacion;

  listaFiltros: string[] = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  displayFnP(prov?: Provincia): string | undefined {
    return prov ? prov.nombreProvincia : undefined;
  }

  constructor(
    private data: DataSharingService,
    private sSuc: SucursalesService,
    ) {}

  obtenerProvincias(): Provincia[] {
    const provincias: Provincia[] = JSON.parse(sessionStorage.getItem('provincias'));
    return provincias;
  }

  getLocalidadesByProvincia(provincia: Provincia) {
    this.agregarFiltro(provincia.nombreProvincia);
    const lloc: Localidad[] = JSON.parse(sessionStorage.getItem('localidades'));
    this.listaLocalidades = lloc.filter(loc => loc.codigoEntidadFederal === provincia.codigoEntidadFederal);
  }

  crearCriterioDeBusqueda(provincia: Provincia, localidades: string[]): CriterioBusquedaSucursal {
    const criterio: CriterioBusquedaSucursal = { componente: this.nombreComponente };
    if (provincia !== null && provincia !== undefined) {
      criterio.idProvincia = provincia.codigoEntidadFederal;
    }
    if (localidades !== null && localidades !== undefined) {
      const opTodasLasMarcas = localidades.filter(s => s === undefined).length === 1;
      if (opTodasLasMarcas) {
        return criterio;
      } else {
        criterio.localidades = localidades;
        return criterio;
      }
    }
    return criterio;
  }

  buscar(): void {
    /*const provincia: Provincia = this.formFilterProvincias.value;
    const localidades: string[] = this.formFilterLocalidades.value;
    const criterio = this.crearCriterioDeBusqueda(provincia, localidades);
    if (criterio.idProvincia) {
      this.resetFiltroCategoria = false;
    } else {
      this.resetFiltroCategoria = true;
    }
    this.data.changeCriterioBusquedaSucursales(criterio);*/

    const provinciaActual: Provincia = this.formFilterProvincias.value;
    const localidadActual: Localidad = this.formFilterLocalidades.value;
    const ubicacionActual: Ubicacion = {
      codigoEntidadFederal: provinciaActual.codigoEntidadFederal,
      localidad: localidadActual.nombreLocalidad,
      provincia: provinciaActual.nombreProvincia
    };
    console.log(ubicacionActual);
    this.data.changeUbicacion(ubicacionActual);
  }

  agregarFiltro(filtro: string): void {
    // const input = event.input;
    // const value = event.value;

    this.listaFiltros.push(filtro);
    // Add our fruit
    /*if ((value || '').trim()) {
      this.listaFiltros.push(value.trim());
    }*/
/*
    // Reset the input value
    if (input) {
      input.value = '';
    }*/
  }

  eliminarFiltro(filtro: string): void {
    const index = this.listaFiltros.indexOf(filtro);

    if (index >= 0) {
      this.listaFiltros.splice(index, 1);
    }
  }

  actualizarFiltros(): void {

    this.data.currentUbicacion.subscribe(ub => {
      // this.listaProvincias = this.listaProvincias.filter( p => p.codigoEntidadFederal === ub.codigoEntidadFederal );
      // this.listaLocalidades.push({codigoEntidadFederal: ub.codigoEntidadFederal, nombreLocalidad: ub.localidad});

      this.listaFiltros.push(ub.provincia);
      this.listaFiltros.push(ub.localidad);
      console.log(this.listaProvincias);
      console.log(this.listaLocalidades);
    });

    /*this.suscripcionSucursalesDeSupermercados = this.data.sucursalesDeSupermercados.subscribe(ev => {
      if (ev.componente) {
        if (ev.sucursales.length > 0) {
          // cargamos las localidades
          this.listaLocalidades = [];
          const conjuntoLocalidades = new Set<string>();
          ev.sucursales.forEach(s => conjuntoLocalidades.add(s.nombreSucursal));
          this.listaLocalidades = Array.from(conjuntoLocalidades.values());
          // si el evento vino del componente 'DialogLocationComponent'
          if (ev.componente.match('DialogLocationComponent') !== null) {
            const codigoEntidadFederal = ev.sucursales[0].codigoEntidadFederal;
            const provincia = this.obtenerProvincias().find(prov => prov.codigoEntidadFederal === codigoEntidadFederal);
            this.listaProvincias = [provincia];
            return;
          }
          // si el evento vino desde este mismo componente
          if (ev.componente.match(this.nombreComponente) !== null) {
            // hay que resetear el filtro de categorias
             if (this.resetFiltroCategoria) {
              this.listaProvincias = this.obtenerProvincias();
             }
             return;
          } else {// el evento vino de algun otro componente
            this.listaProvincias = this.obtenerProvincias();
            this.formFilterProvincias.reset();
            this.formFilterLocalidades.reset();
            return;
          }
        } else {
          this.listaLocalidades = [];
          return;
        }
      }
    });*/
  }


  ngOnDestroy(): void {
    // this.sus.unsubscribe();
  }

  ngOnInit() {
    this.listaProvincias = this.obtenerProvincias();
    this.actualizarFiltros();
    this.resetFiltroCategoria = false;
  }

}
