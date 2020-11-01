import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart } from '@angular/router';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss'],
})
export class ListaCorreoComponent implements OnInit {
  correos: any[];
  responder: boolean;
  correoAResponder: any;

  constructor() {
    const correo1 = {
      titulo: 'Titulo del 1',
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email,
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email`,
      emisor: 'correoEmisor1@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: true,
    };
    const correo2 = {
      titulo: 'Titulo del 2',
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuer`,
      emisor: 'correoEmisor2@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: false,
    };
    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);

    this.correos.push({
      titulo: 'Titulo del 3',
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuer`,
      emisor: 'correoEmisor3@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: false,
    });
    this.correos.push({
      titulo: 'Titulo del 4',
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuer`,
      emisor: 'correoEmisor4@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: false,
    });

    this.responder = false;
  }

  ngOnInit(): void {}

  clickResponder(correo) {
    //this.responder = !this.responder;
    //this.correoAResponder = correo;
    correo.responder = !correo.responder;
  }

  accionRespuestaRapida(){
    console.log("Respuesta Recibida");
  }
}
