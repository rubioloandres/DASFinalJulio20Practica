import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MensajeService {
  constructor(
    private http: HttpClient
  ) { }

  enviarMensajeTodasSucursales(nombre: string, apellido: string, mensaje: string, email: string): Observable<string> {

    console.log('iegou');
    console.log(nombre + ' ' + apellido + ' ' + mensaje + ' ' + email);

    const options = 'nombre=' + nombre + '&apellido=' + apellido + '&mensaje=' + mensaje + '&email=' + 'email';
    return this.http.post<string>(environment.webAPI + 'mensajeria?' + options, 'none')
    .pipe(
      catchError(err => {
      console.log('Error al obtener respuesta de mensajeria', err);
      return throwError(err);
    }));
  }
}
