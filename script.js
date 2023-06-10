function calcTotalaPagar(descuento,cantidad){
    if (!descuento===100)
        return ((200*cantidad)*(1-descuento/100));
    else
        return 200*cantidad;
}


let frmCompra=document.querySelector("#formCompra");
frmCompra.addEventListener("submit", function(event){
    event.preventDefault();
    let nombre=document.querySelector("#inputNombre");
    let apellido=document.querySelector("#inputApellido");
    let email=document.querySelector("#inputMail");
    let cantidad=document.querySelector("#inputCantidad");
    let categoria=document.querySelector("#inputCategoria");
    let importePagoTotal=document.querySelector("#importeTotal");
    let validNombre=document.querySelector("#error-nombre");
    let validApellido=document.querySelector("#error-apellido");
    let validEmail=document.querySelector("#error-email");
    let validCantidad=document.querySelector("#error-cantidad");

    
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
        
});

let btnBorrar=document.querySelector("#btnBorrar");
btnBorrar.addEventListener("click", function(event){
    let importePagoTotal=document.querySelector("#importeTotal");
    importePagoTotal.innerHTML="Total a pagar: $";
})