import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sucursal } from '../../interfaces/sucursal';
import { catchError } from 'rxjs/operators';
import { CadenaSucursal } from 'src/app/interfaces/cadena';
import { ErrorManager } from '../handleError.service';
import { forEach } from '@angular/router/src/utils/collection';
import { CriterioBusquedaSucursal } from 'src/app/interfaces/criterios';

@Injectable()
export class SucursalesService {

  constructor(
    private http: HttpClient,
    private errManager: ErrorManager
    ) { }

  public getSucursales(codEntidadFed: string, loc: string): Observable<CadenaSucursal[]> {
    const options = 'codigoentidadfederal=' + codEntidadFed + '&localidad=' + loc;
    return this.http.get<CadenaSucursal[]>(environment.webAPI + 'sucursales?' + options)
                    .pipe(catchError(err => {
                      console.log('Error al obtener sucursales', err);
                      return throwError(err);
                    }));
  }

  // TODO hacer para multiples localidades
  public getSucursalesPorFiltro(critops: CriterioBusquedaSucursal): Observable<CadenaSucursal[]> {

    /*   const options = 'codigoentidadfederal=' + codEntidadFed + '&localidad=' + localidad;

    loc.forEach(l => {
      console.log(l);
    });
*/
    const httpParams: HttpParams = this.crearHttpParams(critops);
    console.log(environment.webAPI + 'sucursales', {params: httpParams});

    return this.http.get<CadenaSucursal[]>(environment.webAPI + 'sucursales' , {params: httpParams})
                    .pipe(catchError(err => {
                      console.log('Error al obtener sucursales', err);
                      return throwError(err);
                    }));
  }

  crearHttpParams(critops: CriterioBusquedaSucursal): HttpParams {

    const agregarProvincias = (params: HttpParams): HttpParams => {
      if (critops.idProvincia) {
        return params.set('codigoentidadfederal', critops.idProvincia.toString());
      } else {
        return params;
      }
    };

    const agregarLocalidades = (params: HttpParams): HttpParams => {
      if (critops.localidades) {
        return params.set('localidad', critops.localidades.toString());
      } else {
        return params;
      }
    };

    return agregarLocalidades(agregarProvincias(new HttpParams()));

    }
}
