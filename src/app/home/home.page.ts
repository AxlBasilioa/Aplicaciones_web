//home.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

direccion:any;

  constructor() {}

leerInputs(){
  const fecha = new Date();
  const fechaActual = fecha.toLocaleDateString('en-GB', {day:'2-digit',month:'2-digit', year:'2-digit'});
  console.log(fechaActual);
}
}
