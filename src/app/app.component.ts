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
    this.config = {
      language: {
        appLanguage: "ENG"
      },
       defaultImage :   ''
    }
   }

  ngOnInit() {
    }

    appLogged:number = 1;
    language: string='ENG';
    appLanguage: ILanguage = {
      name: this.language,
      login: getLanguageConfiguration(this.language),
      imageLanguages: getLanguageImagConfiguration()
    };
    config: {
      language:{
        appLanguage: string
      }
      defaultImage: string
    };
    selectLang(selectedLng:string){
      console.log(selectedLng);
      this.language=selectedLng;
      this.appLanguage = {
        name: this.language,
        login: getLanguageConfiguration(this.language),
        imageLanguages: getLanguageImagConfiguration()
      }
    }
    doLogin(){
      this.appLogged=1;
    }

    onImageLoaded(loaded:boolean){
      console.log('Log Padre !!!  ', loaded);

    }
}
