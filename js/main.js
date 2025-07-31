const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);


let cont = 0;

function ValidarCantidad(){
    if (txtNumber.value.length==0 ){
        return false;
    }//Tenga informacion

    if(isNaN(txtNumber.value)){
        return false;
    //Tiene que ser un numero
    }
    if(Number(txtNumber.value)<=0){
        return false;
    }//Mayor que 0

        return true;
}//validar cantidad

function getPrecio(){
    return Math.round(Math.random()* 10000)/100;
}//getPrecio 

btnAgregar.addEventListener("click", function(event){
 event.preventDefault();
 let isValid = true; 
 alertValidacionesTexto.innerHTML="";
 alertValidaciones.style.display="none";
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
isValid =false;
}//<3

if(! ValidarCantidad()){
    txtNumber.style.border= "thin red solid";
    alertValidacionesTexto.innerHTML += "<strong>La Cantidad no es correcta</strong>";
    alertValidaciones.style.display= "block";
    isValid =false;
}//validar cantidad

if (isValid){
cont++;
let precio = getPrecio();
let row=`<tr>
<td>${cont}</td>
<td>${txtName.value}</td>
<td>${txtNumber.value}</td>
<td>${precio}</td>
</tr>`
;

cuerpoTabla.insertAdjacentHTML("beforeend", row);
txtName.value ="";
txtNumber.value ="";
txtName.focus();

}//isValid

 //Number
 //Tenga informacion
 //Tiene que ser un numero
 //MAYOR A CERO

});//Agregar boton