import { Component, OnInit } from '@angular/core';



const imageAvatarProperties = {
  width: 300,
  uploadPercentage:30,
  src:'assets/img/hombre-avatar.jpg'
}

const imageWorldProperties = {
  width: 300,
  uploadPercentage:80,
  src:'assets/img/World.jpg'
}

const btnEnviarProperties = {
  disabled: true,
  text: "Enviar"
}
const btnIncrementarEdadProperties = {
  disabled: true,
  text: "Incrfementar Edad"
}

const btnActivarProperties = {
  disabled: false,
  text: "Activar",
  Activar: function(){ alert('OK');}


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


  name = 'Nicolas';
  newName = 'Mario';
  age=21;
  image= 'https://www.unir.net/wp-content/uploads/2020/07/mba-tech.jpg';
  btnDisabled=true;
  imgAvatarProperties = imageAvatarProperties;
  imgWorldProperties = imageWorldProperties;
  btnEnviarProperties = btnEnviarProperties
  btnActivarProperties = btnActivarProperties;
  btnIncrementarEdadProperties = btnIncrementarEdadProperties;
  person = {
    name: 'Mario Alfonso Vidales Vazquéz',
    age : 85,
    avatar: imageAvatarProperties.src
  };
  namePersons:string[] = ['Mario', 'Jose','Ana','Felipe','Sandy']
  ScrollTop=0;

  agregaNombre(){

    if (this.newName)
    {
      this.namePersons.push(this.newName)
      this.newName='';
    }

  };

  eliminarNombre(pos:number){
    this.namePersons.splice(pos,1);
  };



  Activar() {
    this.btnEnviarProperties.disabled=!this.btnEnviarProperties.disabled;
    if (this.btnEnviarProperties.disabled)
        this.btnActivarProperties.text="Activar";
       else
       this.btnActivarProperties.text="Desactivar";


  }

  Enviar() {
    alert( 'Enviar Información');
  }

  increaseAge(){
      this.person.age++;
  }

  onScroll(event: Event){
  const element = event.target as HTMLElement;
  this.ScrollTop = element.scrollTop;
  }
  onKeyUp(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name= element.value;
  }
}



