import { Component, OnInit } from '@angular/core';
import { GmailService } from 'src/app/Services/gmail.service';
@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss'],
})
export class ListaCorreoComponent implements OnInit {
  correos: any[];
  
  constructor(private gmail: GmailService) {
    this.correos = [];
  }

  ngOnInit() {
    console.log(this.getRecibidos());
  }	  
  clickResponder(correo) {
    //this.responder = !this.responder;
    //this.correoAResponder = correo;
    correo.responder = !correo.responder;
  }

  accionRespuestaRapida(correo){
    correo.responder = false;
  }

  getRecibidos() {
    this.gmail.getRecibidos().subscribe(
      (response) => {
      const mensajes = response.messages;
      console.log("LISTA RECIBIDOS:", mensajes);
      },
      (error) => this.error(error),
    );
  }

  error(error){
    console.warn("ERROR");
  }
}
