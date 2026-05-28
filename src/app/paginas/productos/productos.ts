import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
    Productos:Producto[]=[
    {
      id:0,
      nombre:"camiseta",
      descripcion:"camiseta racing",
      precio:10000,
      imagen:'',
      stock:7,
      talle:'M',
      disponibilidad:true
    },
    {
      id:1,
      nombre:'camiseta racing nike',
      descripcion:'camiseta titular racing 2026',
      precio:100000,
      imagen:'',
      stock:7,
      talle:'M',
      disponibilidad:true
    },
    {
      id:2,
      nombre:'botines nike air zoom',
      descripcion:'botines nike air zoom tapones mixtos',
      precio:230000,
      imagen:'',
      stock:18,
      talle:'42',
      disponibilidad:true,
    },
    {
      id:3,
      nombre:'camiseta titular argentina',
      descripcion:'camiseta titular argentina mundial 2026',
      precio:120000,
      imagen:'',
      stock:20,
      talle:'L',
      disponibilidad:true
    },
    {
      id:4,
      nombre:'botines nike superfly ',
      descripcion:'botines ike superfly blanco con azul',
      precio:10000,
      imagen:'',
      stock:7,
      talle:'M',
      disponibilidad:true
    },
    {
      id:5,
      nombre:'botines adidas f50 ',
      descripcion:'adidas f50 negro',
      precio:256000,
      imagen:'',
      stock:12,
      talle:'43',
      disponibilidad:true
    }
  ]
}
