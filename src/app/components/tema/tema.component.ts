import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from '../../interfaces/agregar.interface';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styles: []
})
export class TemaComponent implements OnInit {

  categoria: string;
  nueva_pregunta: Pregunta = {
    categoria: '',
    // id_pregunta: '',
    pregunta: '',
    respuesta_corta: '',
    respuesta_larga: ''
  };

  tarjeta: Pregunta;

  preguntas: any[] = [];
  parrafos: any[] = [];
  cargar = false;


  constructor(private _preguntasService: PreguntasService,
              private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params
      .subscribe( parametros => {
        this.categoria = parametros['id'];
      });

    this._preguntasService.getPreguntas()
    .subscribe( preguntas => {
          this.preguntas = preguntas;
          console.log(this.preguntas);
          });
        }

        ngOnInit() {


        }

        verMas( tarjeta$: Pregunta) {

          this.cargar = true;

          this.tarjeta = tarjeta$;
          this.parrafos = this.tarjeta.respuesta_larga.split('&');
          console.log(this.parrafos);
          /*
          this._preguntasService.getPregunta(categoria$, key$)
              .subscribe( pregunta => {
                this.pregunta = pregunta;
                console.log(pregunta);
              });
      */
            }
  }


