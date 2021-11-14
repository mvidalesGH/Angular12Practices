import { Component, OnInit } from '@angular/core';
import { ILanguage , getLanguageConfiguration, getLanguageImagConfiguration } from './models/idioms.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: any;
 constructor() {
  this.appTitle='Hola !!!';
  this.storeData = {
    headerData:{
      img:'',
      title:'Titulo Principal de la Pantalla',
      subTitle:'SubTitulo'
    },
    footerData:{
      seccion1:"Seccion 1",
      seccion2:"Seccion 2",
      seccion3:"Seccion 3"
    }
  }
 }

  ngOnInit() {
    this.config = {
      language: {
        appLanguage: "ENG"
      },
      defaultImage : ''
    };
  }
    appLogged:number = 1;
    language: string='ENG';
    appLanguage: ILanguage = {
      name: this.language,
      login: getLanguageConfiguration(this.language),
      imageLanguages: getLanguageImagConfiguration()
    };
    appTitle: string;
    config?: {
      language:{
        appLanguage: string
      }
      defaultImage: string
    };
    storeData:{
      headerData:{
        img:string,
        title:string,
        subTitle:string
      },
      footerData:{
        seccion1:string,
        seccion2:string,
        seccion3:string,
      }
    };

    selectLang(selectedLng:string){
      console.log(selectedLng);
      this.language=selectedLng;
      this.appLanguage = {
        name: this.language,
        login: getLanguageConfiguration(this.language),
        imageLanguages: getLanguageImagConfiguration()
      }
    };
    doLogin(){
      this.appLogged=1;
    }
}
