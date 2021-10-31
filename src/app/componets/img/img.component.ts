import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  private imageLoaded: boolean = false;
  constructor() { }

  @Input() imgsource:string='';
  @Output() imageLoadedEvent = new EventEmitter();

  imgDefaultsource = './assets/img/imageDefault.png';
  ngOnInit(): void {
    this.imageLoaded=true;
  }

  imgError(){
    this.imgsource='./assets/img/imageError.png';
    this.imageLoaded=false;
  }

  imgLoaded(){
    console.log('Loaded Hijo!!!');
    this.imageLoadedEvent.emit(this.imageLoaded);
  }
}
