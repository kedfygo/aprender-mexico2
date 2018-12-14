import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from '../../interfaces/agregar.interface';
import { PreguntasService } from '../../services/preguntas.service';
import { format } from 'util';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit {


  nueva_pregunta: Pregunta = {
    categoria: '',
    // id_pregunta: '',
    pregunta: '',
    respuesta_corta: '',
    respuesta_larga: ''
  };

  nuevo = false;
  id: string;
  categoria: string;

  constructor(private _preguntasService: PreguntasService,
              private _router:Router,
              private _activatedRoute: ActivatedRoute) {

                this._activatedRoute.params
                    .subscribe( parametros => {
                      // console.log(parametros);
                      this.categoria = parametros['categoria'];
                      this.id = parametros['id'];
                      if (this.id !== 'nuevo' ) {
                        this._preguntasService.getPregunta(this.categoria, this.id)
                            .subscribe( pregunta => this.nueva_pregunta = pregunta );
                      }
                      });
               }

  ngOnInit() {
  }


  guardar(forma) {

    // console.log(this.nueva_pregunta);

    if (this.id == 'nuevo') {
      // insertando
      this._preguntasService.nuevaPregunta( this.nueva_pregunta)
        .subscribe( data => {
          this._router.navigate(['/agregar', 'nuevo']);
          forma.reset();

        },
        error => console.error(error));
    } else {
      // actualizando
      this._preguntasService.actualizarPregunta( this.nueva_pregunta, this.categoria, this.id)
        .subscribe( data => {
          // this._router.navigate(['/agregar', this.categoria, data.name]);
          console.log(data);
        },
        error => console.error(error));
    }
  }

  agregarNueva(forma:NgForm) {

    this._router.navigate(['/agregar', 'nuevo']);

    /*
    forma.reset({
      categoria: 'historia'
    });
    */
   forma.reset();

  }
}
