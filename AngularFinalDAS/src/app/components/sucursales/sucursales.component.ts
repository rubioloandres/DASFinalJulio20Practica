import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/indec/sucursales.service';
import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { Sucursal } from 'src/app/interfaces/sucursal';
import { Cadena, CadenaSucursal } from 'src/app/interfaces/cadena';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { Subscription } from 'rxjs';
import { DataSharingService } from 'src/app/services/datasharing.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  listaSucursales: Sucursal[] = new Array();
  listaCadenas: Cadena [] = new Array();
  error: string;

  private suscripcionCriterioBusquedaSucursal: Subscription;
  private suscripcionSucursalService: Subscription;
/*
  actualizarSucursales() {

    this.suscripcionCriterioBusquedaSucursal =
      this.dataSharingService
        .currentCriterioSuc
        .subscribe(criterioBusqueda => {
          // Buscamos los productos segun el criterio
          this.suscripcionSucursalService =
            this.sSuc
              .getSucursalesPorFiltro(criterioBusqueda)
              .subscribe(sucs => {
                // Asignamos las nuevas sucursales a la lista para que la vista pueda mostrarlos
                this.listaSucursales = sucs;
                // Emitimos un evento que acuse que el listado de sucursales se ha cambiado junto con el componente que emitio el cambio
                this.dataSharingService.sucursalesActualizado({ sucursales: sucs, componente: criterioBusqueda.componente });
              }, err => {
                console.log('HTTP Error Busqueda de sucursales ', err);
                // TODO:Manejo de error updateCatalog
              }, () => console.log('HTTP Request Busqueda de sucursales completed'));
        });

/*
    const provincia: Provincia = this.formFilterProvincias.value;
    const localidad: Localidad = this.formFilterLocalidades.value;
  const localidades: Localidad[] = this.formFilterLocalidades.value;

    let listaDeLocalidades: string [] = [];
    localidades.forEach(l => {
      listaDeLocalidades = listaDeLocalidades.concat(l.nombreLocalidad);
    });


// TODO hacer filtro para multiples localidades

    this.sSuc.getSucursalesPorFiltro(provincia.codigoEntidadFederal, localidad.nombreLocalidad)
    .subscribe( cadenas  =>  {
            cadenas.forEach(cadena => {
              if (cadena.disponible) {
                this.listaSucursales = this.listaSucursales.concat(cadena.sucursales);
              }
          });
            console.log('HTTP Response Sucursales success');
            console.log(this.listaSucursales);
      }, err => {
          console.log('HTTP Error Sucursales ', err);
          this.error = err;
      }, () => console.log('HTTP Request Sucursales completed')
    );
  } */

  updateSucursales() {

    this.dataSharingService.currentUbicacion.subscribe(ub => {
      this.sSuc.getSucursales(ub.codigoEntidadFederal, ub.localidad).subscribe( cadenas  => {
          cadenas.forEach(cadena => {
            if (cadena.disponible) {
              this.listaSucursales = this.listaSucursales.concat(cadena.sucursales);
              }
            });
          console.log('HTTP Response Sucursales success');
          console.log(this.listaSucursales);
        }, err => {
          console.log('HTTP Error Sucursales ', err);
          this.error = err;
        }, () => console.log('HTTP Request Sucursales completed')
      );
    });

    // const ubicacion: Ubicacion = JSON.parse(sessionStorage.getItem('ubicacion'));
  }

  getCadena(id: number) {
    return this.listaCadenas.find(cad => cad.idCadena === id);
  }

  loadCadenas() {
    this.listaCadenas = JSON.parse(sessionStorage.getItem('cadenas'));
  }

  showMapa(lat: number, lng: number, nombreUbic: string, ubic: string) {
    const dialogRef = this.dialog.open(MapComponent, {
      width: '500px',
      height: '500px',
      data: { latitud: lat, longitud: lng, precision: 100, nombreUbicacion: nombreUbic, direccion: ubic}
    });

  }

  constructor(
    private dataSharingService: DataSharingService,
    private sSuc: SucursalesService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.loadCadenas();
    this.updateSucursales();

    // this.actualizarSucursales();
  }

}
