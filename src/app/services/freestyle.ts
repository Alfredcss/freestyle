import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Freestyle {
  // propiedades
  baseUri: string = 'https://backend-54ww.onrender.com/api';
  //poner aqui la ip del backen en deploy y luego subir el angular a un hosting
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // método para agregar un empleado
  agregarRapero(data: any): Observable<any> {
    let url = `${this.baseUri}/agregar`;
    return this.http
      .post(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // método para obtener todos los empleados
  getRaperos(): Observable<any> {
    let url = `${this.baseUri}/rapero`;
    return this.http
      .get(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // método para obtener un empleado por ID
  getRapero(id: any): Observable<any> {
    let url = `${this.baseUri}/rapero/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // método para actualizar un empleado
  actualizarRapero(id: any, data: any): Observable<any> {
    let url = `${this.baseUri}/actualizar/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // método para eliminar un empleado
  eliminarRapero(id: any): Observable<any> {
    let url = `${this.baseUri}/eliminar/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // manejo de errores
  private errorMgmt(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage); // Log the error to the console
    return throwError(() => errorMessage);
  }
}
