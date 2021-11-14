import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  @Input() _footerInfo:{
    seccion1:string,
    seccion2:string,
    seccion3:string
  }
  constructor() {
    this._footerInfo = {
      seccion1:"",
      seccion2:"",
      seccion3:""
    }
  }

  ngOnInit(): void {
  }

}
