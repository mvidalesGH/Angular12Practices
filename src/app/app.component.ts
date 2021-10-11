import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Nicolas';
  age=21;
  image= 'https://www.unir.net/wp-content/uploads/2020/07/mba-tech.jpg';
  btnDisabled=true;
  person = {
    name: 'Mario',
    age : 85,
    avatar: 'https://www.unir.net/wp-content/uploads/2020/07/mba-tech.jpg'
  }

}
