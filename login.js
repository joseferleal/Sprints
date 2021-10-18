let registros=[];
function login(){
/* esta función estará encargada de validar los campos ingresados con la información alojada en el arreglo global donde se encuentran cada uno de los registros de los
usuarios de la aplicación (arreglo trabajado en la actividad uno del sprint número tres). 
Valida correo, teléfono y contraseña con lo que ya está alojado.
*/

let Correo=document.getElementById("Correo");
let Telefono=document.getElementById("Telefono");
let Contrasena=document.getElementById("Contrasena");

/*if (Correo!=null || Telefono!=null|| Contrasena!=null){console.log("Iniciando sesión");return true }if (Correo=='juan@gmail.com '){return true;}else {return false;}
}*/

if (Correo!=null || Telefono!=null|| Contrasena!=null) {
  if (Correo!=null) {
    return true;
  } else {
    return false;
  }
} else {
  return false;
} 
}
function agregarRegistro(){
    let Telefono=document.getElementById("Telefono");
    let Correo=document.getElementById("Correo");
    let Contrasena=document.getElementById("Contrasena");
    let usuario = [Telefono, Correo, Contrasena];
    registros.push(usuario);
    console.log(registros);

}
function validarCAPTCHA(valor){
    var a='ocaso';
    var b=document.getElementById('captcha');
    if(a==b){
        console.log("Bien hecho")
        return true;
    }else{
        console.log("Captcha incorrecto");
        return false; 
    }

}

module.exports.login=login;
module.exports.registros=registros;
module.exports.validarCAPTCHA=validarCAPTCHA;
module.exports.agregarRegistro=agregarRegistro;