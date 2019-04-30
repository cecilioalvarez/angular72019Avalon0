import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {


  listaPersonas:Persona[]=[];
  //variable pero no es un objeto en este momento
  personaSeleccionada:Persona;
  constructor() { 

    this.listaPersonas.push(new Persona ("pepe","perez",30));
    this.listaPersonas.push(new Persona ("pepe","gomez",50));
    this.listaPersonas.push(new Persona ("maria","sanchez",20));
    this.listaPersonas.push(new Persona ("gema","gutierrez",60));

  }

  ngOnInit() {
  }

  seleccionar(persona:Persona) {

    this.personaSeleccionada=persona;
  }

}
