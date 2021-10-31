export interface ILanguage{
  name:string;
  login:loginLanguage;
  imageLanguages:loginLanguageImages;

};

export function getLanguageConfiguration(lng: string):loginLanguage {

  const listLanguages = [{
    lang: "ESP",
    img: '.\\assets\\img\\mexico.png',
    title:"Cuenta de Acceso",
    userLabel:"Usuario",
    passwordLabel:"Contraseña",
    remeberMeCheckLabel:"Recordarme",
    forgotPasswordLabel:"Olvido su Contraseña?",
    logInButtonLabel:"ACCEDER",
    confirmPasswordLabel:"Confirmación Contraseña",
    eMailAdressLabel:"Correo Electronico",
    registerTitle:"REGISTRO",
    registerButtonLabel:"Registrar"
  },
  {
    lang: "ENG",
    img: '.\\assets\\img\\usa.png',
    title:"ACCOUNT LOGIN",
    userLabel:"USERNAME",
    passwordLabel:"PASSWORD",
    remeberMeCheckLabel:"Remember Me",
    forgotPasswordLabel:"Forgot Password?",
    logInButtonLabel:"LOG IN",
    confirmPasswordLabel:"Confirm Password",
    eMailAdressLabel:"EMail Adress",
    registerTitle:"REGISTER FORM",
    registerButtonLabel:"REGISTER"}];

 return listLanguages.filter(x => x.lang===lng)[0];
}

export function getLanguageImagConfiguration():loginLanguageImages {

  const listLanguages = {
    espLngImage: '.\\assets\\img\\mexico.png',
    engLngImage: '.\\assets\\img\\usa.png'

  }
 return listLanguages;
}

class loginLanguageImages{
  espLngImage: string;
  engLngImage: string;
  constructor(){
    this.espLngImage='.\\assets\\img\\mexico.png';
    this.engLngImage='.\\assets\\img\\usa.png';
  }
}

class loginLanguage{
  lang?:string;
  img?:string;
  title:string;
  userLabel:string;
  passwordLabel:string;
  remeberMeCheckLabel:string;
  forgotPasswordLabel:string;
  logInButtonLabel:string;
  confirmPasswordLabel:string;
  eMailAdressLabel:string;
  registerTitle:string;
  registerButtonLabel:string;

  constructor(){
    this.lang="ESP"
    this.title="Cuenta de Acceso";
    this.userLabel="Usuario";
    this.passwordLabel="Password";
    this.remeberMeCheckLabel="Recordarme";
    this.forgotPasswordLabel="Olvido su Password?";
    this.logInButtonLabel="Acceder";
    this.confirmPasswordLabel="Confirmación Password";
    this.eMailAdressLabel="Correo Electronico";
    this.registerTitle="Registro";
    this.registerButtonLabel="Registro"
    }


}


