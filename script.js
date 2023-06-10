function calcTotalaPagar(descuento,cantidad){
    return ((200*cantidad)*(1-descuento/100));
}


let frmCompra=document.querySelector("#formCompra");
frmCompra.addEventListener("submit", function(event){
    event.preventDefault();
    var nombre=document.querySelector("#inputNombre");
    var apellido=document.querySelector("#inputApellido");
    var email=document.querySelector("#inputMail");
    var cantidad=document.querySelector("#inputCantidad");
    var categoria=document.querySelector("#inputCategoria");
    var importePagoTotal=document.querySelector("#importeTotal");
    var validNombre=document.querySelector("#error-nombre");
    var validApellido=document.querySelector("#error-apellido");
    var validEmail=document.querySelector("#error-email");
    var validCantidad=document.querySelector("#error-cantidad");

    
    let expresionRemail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valido=true;         
    if (nombre.value===""){
        validNombre.textContent="Debe escribir un nombre";
        valido=false;
    }
    if (apellido.value===""){
        validApellido.textContent="Debe escribir un apellido";
        valido=false;
    }

    if (!expresionRemail.test(email.value)){
        validEmail.textContent="Debe escribir una dirección de correo válida";
        valido=false;
    }

    if (isNaN(cantidad.value) && (!Number.isInteger(cantidad.value)) ){
        validCantidad.textContent="Debe escribir un número entero";
        valido=false;
    }

    if (cantidad.value===""){
        validCantidad.textContent="Indique una cantidad";
    }

    let totalPago;
    if (valido==true){

        switch (categoria.value){
            case "Estudiante":
                totalPago=calcTotalaPagar(80,parseInt(cantidad.value));
                break;
            case "Trainee":
                totalPago=calcTotalaPagar(50,parseInt(cantidad.value));
                break;
            case "Junior":
                totalPago=calcTotalaPagar(15,parseInt(cantidad.value));
                break;
            default:
                totalPago=calcTotalaPagar(100,parseInt(cantidad.value));
                break;

        }
    }
    importePagoTotal.innerHTML="Total a pagar: $ "+totalPago;
        
})