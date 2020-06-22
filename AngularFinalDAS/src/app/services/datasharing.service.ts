import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CriterioBusquedaProducto, CatalogoActualizado, CriterioBusquedaSucursal, SupermercadosActualizado} from '../interfaces/criterios';
import { Ubicacion } from '../interfaces/ubicacion';
import { Producto } from '../interfaces/producto';

@Injectable()
export class DataSharingService {

// --- Canal de Codigos de Barra ------
  private productosSource = new BehaviorSubject<Producto[]>([]);
  productosParacomparar = this.productosSource.asObservable();

// --- Canal del plato ------
  private platoSource = new BehaviorSubject<number>(0);
  currentPlato = this.platoSource.asObservable();

// ---Canal de Ubicacion------
  private ubicacionSource = new BehaviorSubject<Ubicacion>(
    {
      localidad: 'Capital',
      provincia: 'Córdoba',
      codigoEntidadFederal: 'AR-X'
    }
  );
  currentUbicacion = this.ubicacionSource.asObservable();

// ---Canal de Criterios de Busqueda de Productos------
private criterioSource = new BehaviorSubject<CriterioBusquedaProducto>
(
  {componente: 'SearchbarComponent'} // Un criterio de busqueda vacio significa que retorna todos los productos
);
currentCriterio = this.criterioSource.asObservable();

// ---Canal de Criterios de Busqueda de Sucursales------
  private criterioSucSource = new BehaviorSubject<CriterioBusquedaSucursal>(
    {
    componente : 'SucsearchbarComponent'
    }
  );
  currentCriterioSuc = this.criterioSucSource.asObservable();

// ---Canal del Catalogo------
private productosDelCatalogoSource = new BehaviorSubject<CatalogoActualizado>
(
  // El Argumento por defecto es la lista vacia y el componente es el SearchBarComponent
  {componente: 'SearchbarComponent', productos: []}
);
productosDelCatalogo = this.productosDelCatalogoSource.asObservable();

// ---Canal de Supermercados------
private sucursalesDeSupermercadosSource = new BehaviorSubject<SupermercadosActualizado>
(
  // El Argumento por defecto es la lista vacia y el componente es el SearchBarComponent
  {componente: 'SucSearchbarComponent', sucursales: []}
);
sucursalesDeSupermercados = this.sucursalesDeSupermercadosSource.asObservable();

  compararPrecios(productos: Producto[]) {
    this.productosSource.next(productos);
  }

  changePlato(idPlato: number) {
    this.platoSource.next(idPlato);
  }


// ---Canal de Ubicacion------
  changeUbicacion(ubicacion: Ubicacion) {
    this.ubicacionSource.next(ubicacion);
  }

// ---Canal de Criterios de Busqueda de Productos------
  changeCriterioBusquedaProducto(critops: CriterioBusquedaProducto) {
    this.criterioSource.next(critops);
  }

// ---Canal de Criterios de Busqueda de Sucursales------
changeCriterioBusquedaSucursales(critops: CriterioBusquedaSucursal) {
  this.criterioSucSource.next(critops);
}

// ---Canal del Catalogo de Productos------
  catalogoActualizado(event: CatalogoActualizado) {
    this.productosDelCatalogoSource.next(event);
  }

// ---Canal del Sucursales de Supermercados------
  sucursalesActualizado(event: SupermercadosActualizado) {
    this.sucursalesDeSupermercadosSource.next(event);
  }
  // ----------------------------------Constructor----------------------------------------------------------
  constructor() { }
}
