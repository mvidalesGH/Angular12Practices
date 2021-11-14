import { Component, Input ,OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() item: IProduct = {valid: false,
                    name:'',
                     price:0,
                     description:'',
                     image:''};

  constructor() { }
  ngOnInit(): void {
      this.product.valid = this.item.valid;
      this.product.name = this.item.name;
      this.product.price = this.item.price;
      this.product.description = this.item.description;
      this.product.image = this.item.image;

  }
  product:IProduct = {valid: false,
    name:'',
     price:0,
     description:'',
     image:''};


  onImageLoaded(loaded:boolean){
      console.log('Log Padre !!!  ', loaded);
    }

}


