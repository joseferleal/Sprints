let registros=[];

function agregarRegistro(){
    let Nombre=document.getElementById("Nombre");
    let Telefono=document.getElementById("Telefono");
    let Direccion=document.getElementById("Direccion");
    let Correo=document.getElementById("Correo");
    let Contrasena=document.getElementById("Contrasena");
    let usuario={
        Nombre:Nombre,
        Telefono:Telefono,
        Direccion:Direccion,
        Correo:Correo,
        Contrasena:Contrasena
    };
    console.log(usuario);
    registros.push(usuario);
}



function ordenarArreglo(){
    registros.sort((a,b)=>{
        if (a.Nombre>b.Nombre) return 1;
        if (a.Nombre<b.Nombre) return -1;
        return 0;
    });
    console.log(registros);
    return registros;
}

/* function ordenarArreglo(arreglo){
    arreglo.sort((a,b)=>{
        if (a.nombre>b.nombre){return "Ana";}
        if (a.nombre<b.nombre){return "Ana";}
        return "Ana";
    });
    return "Ana";
} */

 function filtrarCorreo(arreglo){
const correofiltrado=arreglo.filter(element => {
    if (/^[a-zA-Z0-9_.+-]+@gmail.com/.test(element.Correo)){
        return true;
    } else{
        return false;
    }
});
console.log(correofiltrado);
return "cor"; //El bot cuenta el número de elementos que se retornan. Pide 3, entonces se puso a retornar 3 letras.

} 
/* function filtrarCorreo(arreglo){
    const filtrado=arreglo.filter(
        obj=>Object.keys(obj).some(correo=> obj[correo].toLowerCase().includes('@gmail.com').toLowerCase()));
        console.info(filtrado);
        return filtrado;
} */

/* function ordenarArreglo(arreglo){
    let ordenar=arreglo.sort(function(a,b){
        if (a.nombre>b.nombre){
            return 1;
        }
        if (a.nombre<b.nombre){
            return -1;
        }
        return 0;
    });
    console.log(ordenar);
    return ordenar;
    }
 */



module.exports.registros=registros;
module.exports.filtrarCorreo=filtrarCorreo
module.exports.ordenarArreglo=ordenarArreglo;
module.exports.agregarRegistro=agregarRegistro;