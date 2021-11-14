export interface IProduct{
  valid?:boolean,
  name:string,
  price:number;
  image:string;
  description:string;
  category?:string
};

class Product implements IProduct {
  constructor(name: string, description: string) {
    this.valid=false;
    this.name=name;
    this.price = 0;
    this.image = '';
    this.description=description;
  }
  valid:boolean;
  name:string;
  price:number;
  image:string;
  description:string;
  category?:string
}
