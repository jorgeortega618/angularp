import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})

export class CrearProductoComponent {
  producto = {
    nombre: '',
    descripcion: '',
    precio: null,
    imagen: null
  };

  onSubmit() {
    if (this.producto.nombre && this.producto.precio) {
      alert('Producto creado exitosamente');
    } else {
      alert('Por favor llene los campos obligatorios');
    }
  }

  onFileSelected(event: any) {
    this.producto.imagen = event.target.files[0];
  }
}

