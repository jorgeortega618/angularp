import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  productos = [
    {
      nombre: 'Aretes perlas',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$20',
      imagen: '/f1.png'
    },
    {
      nombre: 'Zapatos formales hombre',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$200',
      imagen: '/f2.png'
    },
    {
      nombre: 'Cinturón color negro',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$50',
      imagen: '/f3.png'
    },
    {
      nombre: 'Boina negra',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$30',
      imagen: '/f4.png'
    },
    {
      nombre: 'Sets de medias',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$5',
      imagen: '/f5.png'
    },
    {
      nombre: 'Zapatillas negras',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$100',
      imagen: '/f6.png'
    },
    {
      nombre: 'Zapatos blancos',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$150',
      imagen: '/f7.png'
    },
    {
      nombre: 'Bolso mujer beige',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      precio: '$60',
      imagen: '/f8.png'
    }
  ];  

  constructor() { }

  ngOnInit(): void {
  }

}
