import { Producto } from './producto';
import { Sucursal } from './sucursal';
import { CadenaSucursal } from './cadena';

export interface CriterioBusquedaProducto {
  idCategoria?: number;
  marcas?: string[];
  palabraclave?: string;
  componente: string; // Nombre del componente que cambia el criterio de busqueda.
}

export interface CriterioBusquedaSucursal {
  idProvincia?: string;
  localidades?: string[];
  componente: string; // Nombre del componente que cambia el criterio de busqueda.
}

export interface CatalogoActualizado {
  productos: Producto[];
  componente: string;
}

export interface SupermercadosActualizado {
  sucursales: CadenaSucursal [];
  componente: string;
}
