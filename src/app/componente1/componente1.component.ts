import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  
  
  nombre:string="pedro";
  importe:number=100;
  persona1:Persona;
  constructor() {

    this.persona1=new Persona("juan","gomez",30);


   }

  ngOnInit() {
  }

}
