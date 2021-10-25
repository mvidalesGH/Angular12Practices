export interface ILanguage{
  name:string;
  login:loginLanguage;
};

export function getLanguageConfiguration(lng: string):loginLanguage {

  const listLanguages = [{
    lang: "ESP",
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


class loginLanguage{
  lang?:string;
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


