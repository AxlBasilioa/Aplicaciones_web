//home.page.ts
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  direccion:any;
  colonia:any;
  constructor() {}

  async codificarURI(){
    const direccion = encodeURIComponent(this.direccion);
    const key = 'AIzaSyCHOAxhViHw9BvSwlhqwq4OoUU1vzKA2E0';
    const proxyUrl = 'https://us-central1-rodsardb.cloudfunctions.net/api/directions';
    const miDireccion = encodeURIComponent('Avenida Universidad Tecnologica numero 200');
    const geoApi = `${proxyUrl}?direccion1=${miDireccion}?direccion2=${direccion}`;
    try{
      const response = await axios.get(geoApi);
      console.log(response);
    }catch(error){

    }
  }
}
//npm install axios cors express










//const apiKey = 'AIzaSyCHOAxhViHw9BvSwlhqwq4OoUU1vzKA2E0';
//  const proxyUrl = 'https://us-central1-rodsardb.cloudfunctions.net/api/directions';
//&destination=
//const geocodingApiUrl = `${proxyUrl}?direccion1=${encodeURIComponent(direccion1)}&direccion2=${encodeURIComponent(direccion2)}`;

// &units=metric&language=es&key=