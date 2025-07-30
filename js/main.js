const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function ValidarCantidad(){
    if (txtNumber.value.length == 0){
        return false;
    }//Tenga informacion

    if(isNaN(txtNumber.value)){
        return false;
    //Tiene que ser un numero
    }//Mayor que 0
    if(Number(txtNumber.value)<=0){
        return false;
    }
        return true;
}//validar cantidad

btnAgregar.addEventListener("click",function(event){
 event.preventDefault();
 alertValidacionesTexto.innerHTML="";
 alertValidaciones.display="none";
 txtName.style.border="";
 txtNumber.style.border="";
 //Name
 //Validar que tenga minimo 3 letras
 //que tenga infromacion
if(txtName.value.length<3){
    txtName.style.border="thin red solid";
//mensaje de error 
alertValidacionesTexto.innerHTML = "<strong>El Nombre del producto no es correcto</strong>";
alertValidaciones.style.display="block";
}//<3

if(! ValidarCantidad()){
    txtNumber.style.border= "medium red solid";
    alertValidacionesTexto.innerHTML += "<strong>La Cantidad no es correcta</strong>";
    alertValidaciones.style.display= "block";
}//validar cantidad

 //Number
 //Tenga informacion
 //Tiene que ser un numero
 //MAYOR A CERO

});//Agregar boton