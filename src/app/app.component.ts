import { Component, OnInit } from '@angular/core';
import { ILanguage , getLanguageConfiguration } from './models/idioms.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title: any;


  constructor() {
   }


  ngOnInit() {
    }

    appLogged:boolean = false;
   language: string='ENG';
   appLanguage: ILanguage = {
    name: this.language,
    login: getLanguageConfiguration(this.language)
  }


  selectLang(selectedLng:string){
    console.log(selectedLng);
    this.language=selectedLng;
    this.appLanguage = {
      name: this.language,
      login: getLanguageConfiguration(this.language)
    }
  }
  doLogin(){
    this.appLogged=true;

  }

}
