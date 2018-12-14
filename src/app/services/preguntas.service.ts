import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Pregunta } from '../interfaces/agregar.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  preguntasURL = 'https://aprender-mexico2.firebaseio.com/tema.json';
  preguntaURL = 'https://aprender-mexico2.firebaseio.com/tema';
  parrafo: any[] = [];

  constructor(private _http: Http) { }

  nuevaPregunta(pregunta: Pregunta) {

    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify( pregunta );
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // tslint:disable-next-line:prefer-const
    let categoriaURL = `${ this.preguntaURL }/${ pregunta.categoria }.json`;
    console.log(categoriaURL);

    return this._http.post( categoriaURL, body, { headers })
                .pipe(map( res => {
                  console.log(res.json);
                  return res.json();
                }));

  }

  actualizarPregunta(pregunta: Pregunta, categoria: string, key$: string ) {

    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify( pregunta );
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // tslint:disable-next-line:prefer-const
    let url = `${ this.preguntaURL }/${ categoria }/${ key$ }.json`;

    return this._http.put( url, body, { headers })
                .pipe(map( res => {
                  console.log(res.json);
                  return res.json();
                }));

  }

  getPregunta(categoria$: string, key$: string) {
    // tslint:disable-next-line:prefer-const
    let url = `${this.preguntaURL }/${ categoria$ }/${ key$ }.json`;
    return this._http.get(url)
              .pipe(map(res => res.json()));

  }

  getPreguntas() {

    return this._http.get(this.preguntasURL)
              .pipe(map(res => res.json()));
  }

  borrarPregunta(categoria$: string, key$: string) {
    // tslint:disable-next-line:prefer-const
    let url = `${ this.preguntaURL }/${ categoria$ }/${ key$ }.json`;
    return this._http.delete( url )
                .pipe(map(res => res.json()));

  }

}
