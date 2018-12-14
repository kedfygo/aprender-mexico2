import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { Pregunta } from '../../interfaces/agregar.interface';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styles: []
})
export class MantenimientoComponent implements OnInit {

  preguntas: any[] = [];
  loading = true;
  ruta: string;

  constructor(private _preguntasService: PreguntasService) {

    this._preguntasService.getPreguntas()
        .subscribe( preguntas => {

          setTimeout(() => {
            this.loading = false;
            this.preguntas = preguntas;
            console.log(preguntas);

          }
            , 1);

/*
          for (let key$ in preguntas) {
            if (preguntas.hasOwnProperty(key$)) {
              this.preguntas.push(preguntas[key$]);
            }
          }
*/

        });
   }

  ngOnInit() {
  }

  borraPregunta(categoria$: string, key$: string) {
    this._preguntasService.borrarPregunta(categoria$, key$)
        .subscribe( resp => {
          if (resp) {
            console.error(resp);
          } else {
            // todo bien
            delete this.preguntas[categoria$][key$];
          }

        });
  }

}
