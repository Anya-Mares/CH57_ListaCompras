const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);


const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

let cont = 0;
let totalEnProducto =0;
let costoTotal = 0;
let datos = new Array();
//otra forma de definirlo [];

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
alertValidacionesTexto.innerHTML ="<strong>El Nombre del producto no es correcto</strong><br/>";
alertValidaciones.style.display="block";
isValid = false;
}//<3

if(! ValidarCantidad()){
    txtNumber.style.border= "thin red solid";
    alertValidacionesTexto.innerHTML +="<strong>La Cantidad no es correcta</strong>";
    alertValidaciones.style.display= "block";
    isValid = false;
}//validar cantidad

if (isValid){
cont++;
let precio = getPrecio();
let row =`<tr>
<td>${cont}</td>
<td>${txtName.value}</td>
<td>${txtNumber.value}</td>
<td>${precio}</td>
</tr>`
;
//objeto
let elemento = {
"cont" : cont, 
"nombre" : txtName.value,
"cantidad" : txtNumber.value,
"precio" : precio,
};
datos.push(elemento);
localStorage.setItem("datos", JSON.stringify(datos));
cuerpoTabla.insertAdjacentHTML("beforeend", row);
contadorProductos.innerText=cont;//lo mismo que se coloca en espacio 
totalEnProducto += Number(txtNumber.value);
productosTotal.innerText = totalEnProducto;
costoTotal += precio * Number(txtNumber.value);//total
//costoTotal.toFixed(2) // forma facil 
precioTotal.innerText = new Intl.NumberFormat("es-MX", 
                    { style: "currency", currency: "MXN" }).format(costoTotal);//forma correcta

                    let resumen = {

                        "cont" : cont,
                        "totalEnProducto" : totalEnProducto,
        /*propiedad*/    "costoTotal" : costoTotal //valor

                    };
                    localStorage.setItem("resumen", JSON.stringify(resumen));

txtName.value ="";
txtNumber.value ="";
txtName.focus();//señalar el espacio para empezar

}//isValid


});//Agregar boton

window.addEventListener("load", function(event){
    event.preventDefault();

     if (this.localStorage.getItem("datos")!= null){
        datos = JSON.parse(this.localStorage.getItem("datos"));
        datos.forEach( (dato) => {
    let row =   `<tr>
<td>${dato.cont}</td>
<td>${dato.nombre}</td>
<td>${dato.cantidad}</td>
<td>${dato.precio}</td>
</tr>`
;
cuerpoTabla.insertAdjacentHTML("beforeend", row);
        });

     } //datos != null
     if (this.localStorage.getItem("resumen")!= null){
        let resumen = JSON.parse(this.localStorage.getItem("resumen"));
        costoTotal = resumen.costoTotal;
        totalEnProducto = resumen.totalEnProducto;
        cont = resumen.cont;
     }//resumen != null

    contadorProductos.innerText=cont; 
    productosTotal.innerText = totalEnProducto;
    precioTotal.innerText = new Intl.NumberFormat("es-MX", 
                    { style: "currency", currency: "MXN" }).format(costoTotal);


});//window load
btnClear.addEventListener("click" ,function(event){
    event.preventDefault();
    //1.Eliminar el localStorage
    localStorage.removeItem("datos");
     localStorage.removeItem("resumen");
     //2.Limpiar la tabla
     cuerpoTabla.innerHTML ="";
     //3.limpiar los campos
     txtName.value ="";
    txtNumber.value ="";
    txtName.focus();
    //4.limpiar el borde de los campos
    txtName.style.border="";
    txtNumber.style.border="";
     //5.limpiar los alerts
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    //6.limpiar el resumen
    let cont = 0;
    let totalEnProducto =0;
    let costoTotal = 0;

    contadorProductos.innerText=cont; 
    productosTotal.innerText = totalEnProducto;
    precioTotal.innerText = new Intl.NumberFormat("es-MX", 
                    { style: "currency", currency: "MXN" }).format(costoTotal);
    datos = new Array();
    

});//Limpiar todo

