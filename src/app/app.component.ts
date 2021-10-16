import { Component } from '@angular/core';

const imageAvatarProperties = {
  width: 150,
  src:'assets/img/hombre-avatar.jpg'
}

const imageWorldProperties = {
  width: 75,
  src:'assets/img/World.jpg'
}

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
  imgAvatarProperties = imageAvatarProperties;
  imgWorldProperties = imageWorldProperties;
  person = {
    name: 'Mario',
    age : 85,
    avatar: imageAvatarProperties.src
  }

}
