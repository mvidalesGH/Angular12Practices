const usernane:string  = 'nicobbytes';

const sum = (a: number, b:number) => {
  return a+b;
};

sum(1,3);


class Persona {
    constructor(private age: number , private lastName : string){
      this.age = age;
      this.lastName=lastName;
    }

    public getage(){
      return this.age;
    }

    public getlastName(){
      return this.lastName;
    }
};

const nico = new Persona(10,'Nicolas');



