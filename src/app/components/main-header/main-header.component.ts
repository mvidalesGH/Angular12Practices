import { Component, Input,  OnInit } from '@angular/core';
import { IMainHeader } from 'src/app/models/mainHeader,model';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent implements OnInit {

  @Input() _headerInfo: IMainHeader = {
    img:'',
    title:'Titulo',
    subTitle:'Subtitulo'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
