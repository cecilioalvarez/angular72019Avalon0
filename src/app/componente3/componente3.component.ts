import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  listaPersonas:Persona[]=[];
  constructor() {

    this.listaPersonas.push(new Persona ("pepe","perez",30));
    this.listaPersonas.push(new Persona ("pepe","gomez",50));
    

   }

  ngOnInit() {
  }

}
