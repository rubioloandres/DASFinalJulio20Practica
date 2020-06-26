import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MensajeService } from 'src/app/services/indec/mensaje.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mensajeService: MensajeService
    ) { }

  enviarMensaje() {
    const nombre = this.form.get('nombre').value;
    const apellido = this.form.get('apellido').value;
    const mensaje = (this.form.get('mensaje').value).trim();
    const email = this.form.get('email').value;
    this.mensajeService.enviarMensajeTodasSucursales(nombre, apellido, mensaje, email).subscribe( respuesta => {
        console.log('algui');
        console.log(respuesta);

      }, err => {
        console.log('creo que jue mal guacho');
        console.log(err);
      },
      () => console.log('HTTP Request Mensajes completed')
    );
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      mensaje: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

}
