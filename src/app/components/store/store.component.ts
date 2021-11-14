import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  lstProducts!: IProduct[];

  constructor() { }

  ngOnInit(): void {
    this.lstProducts = [{
      valid:true,
      name:'Nombre Producto',
      price:11.50,
      description:'Descripción del Producto 6',
      image:'./assets/img/bike.jpg'
    },
    {
      valid:true,
      name:'Nombre Producto 2',
      price:11.50,
      description:'Descripción del Producto 2',
      image:'./assets/img/glasses.jpg'
    },
    {
      valid:true,
      name:'Nombre Producto 3',
      price:25.67,
      description:'Descripción del Producto 3',
      image:'./assets/img/house.jpg'
    },
    {
      valid:true,
      name:'Nombre Producto 4',
      price:25.67,
      description:'Descripción del Producto 4',
      image:''
    }
    ,
    {
      valid:true,
      name:'Nombre Producto 5',
      price:25.67,
      description:'Descripción del Producto 5',
      image:'./assets/img/house.jpg'
    }];

  }

}
