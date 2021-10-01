/**SPRINT 2 
 * Validar el campo nombre
evitando que se ingresen
caracteres numéricos,
restringiendo la longitud entre 4 y
30 caracteres máximo y que el
campo no se deje vacío
*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', checkNombre, checkTelefono, checkCorreo, checkDir,checkContrasena); 
});
function checkNombre() {
    /*Por defecto, emite el mensaje de bueno. Si no, evalúa y emite el mensaje de malo */
    var name = document.getElementById('Nombre');
    if (name ==null || name.length==0 || !/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(name)){
        console.log("Datos incorrectos");
       
        return true;
    }
 else {
    console.log(name);
    return false;
}
}
/*Validar el campo teléfono, este
campo debe tener una longitud de
7 dígitos únicamente, solo puede
contener caracteres numéricos y
no puede dejarse vacío.
Debe llamarse  checkTelefono(valor) y debe retornar verdadero o falso */
function checkTelefono() {
    var clave = document.getElementById('Telefono');
    if (clave ==null || clave.length==0 || !/^\d{7}$/.test(clave)){
        console.log("Datos incorrectos");
        return false;
    }
 else {
    console.log(clave);
    return true;
}}
/*Validación del campo dirección. Este campo debe de
contener caracteres alfanuméricos y únicamente los
caracteres especiales de # y -. Así mismo, el campo
deberá de contar con una longitud no mayor a 50
caracteres y al ser un campo requerido no puede
quedar vacío. */
function checkCorreo(){
    valorEmail=document.getElementById('Correo');
    if (valorEmail ==null || valorEmail.length==0 || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valorEmail)){
        console.log("Datos incorrectos");
        return false;
    }
 else {
    console.log(valorEmail);
    return true;
}}
 
/*
Validación del campo dirección. Este campo debe de
contener caracteres alfanuméricos y únicamente los
caracteres especiales de # y -. Así mismo, el campo
deberá de contar con una longitud no mayor a 50
caracteres y al ser un campo requerido no puede
quedar vacío.*/
function checkDir(){
    Dir=document.getElementById('Direccion');
    if (Dir ==null || Dir.length==0 ||Dir.length>50 || !/^[a-zA-Z0-9_.+-]+#[a-zA-Z0-9-]+-[a-zA-Z0-9-.]+$/.test(Dir)){
        console.log("Datos incorrectos");
        return true;
    }
 else {
    console.log(Dir);
    return false;
}}
function checkContrasena(){
    con=document.getElementById('Contrasena');
    if (con ==null || con.length==0 ||con.length<8 || !/^[a-zA-Z0-9_.+-]+$/.test(con)){
        console.log("Datos incorrectos");
        return false;
    }
 else {
    console.log(con);
    return true;
}}
  /* Validar que campo género se
    encuentre seleccionado, es decir, el
    usuario no podrá proseguir con el
    registro, si no escoge alguna de las
    opciones, dado que es un campo
    requerido.*/
 
    // obtenemos todos los input radio del grupo radio (nombre radio) que estén chequeados
      // si no hay ninguno lanzamos alerta
      
/*if(!document.querySelector('input[name="radio"]:checked')) {
    console.log("Datos incorrectos");
    hasError = true;
    }*/
/*Validación de la contraseña, en donde
el usuario deba de ingresar por lo
menos una letra mayúscula, una
minúscula, un número y con una
longitud mayor o igual a 8 dígitos. Este
campo es requerido, por lo que, no se
puede dejar vacío.  */
//De acá exporto las funciones en node.js
module.exports ={checkNombre, checkTelefono, checkCorreo, checkDir, checkContrasena} ;
/*Sirve para lo mismo exports.default =saludar2; **/