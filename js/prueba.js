//1. Creo la referencias de las etiquetas que quiero controlar
let etiquetaNombre = document.getElementById("nombre");
let etiquetaAltura = document.getElementById("alturaCliente");
let etiquetaPeso = document.getElementById("pesoCliente");
let botonCalcular = document.getElementById("botonCalcular");
let resultado = document.getElementById("resultado");

//2. Configuro mi escuchador de vento de clic sobre el botón calcular
botonCalcular.addEventListener("click",validarFormulario)

//3. Crear la función encargada de activarse al momento de hacer clic en el boton
function validarFormulario(){

    let nombre=etiquetaNombre.value;
    let altura=Number(etiquetaAltura.value);
    let peso=Number(etiquetaPeso.value);


    if(nombre=="" && altura==0 && peso == 0){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaAltura.classList.add("is-invalid");
        etiquetaPeso.classList.add("is-invalid");
    }else if(nombre==""){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaAltura.classList.remove("is-invalid");
        etiquetaPeso.classList.remove("is-invalid");
    }else if(altura==0){
        etiquetaAltura.classList.add("is-invalid");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaPeso.classList.remove("is-invalid");
    }else if(peso==0){
        etiquetaPeso.classList.add("is-invalid");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaAltura.classList.remove("is-invalid");
    }
    else{
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaAltura.classList.remove("is-invalid");
        etiquetaPeso.classList.remove("is-invalid");
        //llamar funcion para calcular IMC
        calcularIMC(altura,peso,nombre);
    }
    
   

}

//4. Funcion para calcular el indice de masa corporal
function calcularIMC(altura,peso,nombre){
     let imc = (peso/(altura*altura))
    if(imc<1.70){
       resultado.textContent=`${nombre} su IMC es de bajo peso: ${imc.toFixed(1)}`;
       const imagen = document.createElement("img");
        imagen.src = "img/bajopeso.png" ;
        resultado.appendChild(imagen);
    }else if(imc >=18.5 && imc<24.9){
        resultado.textContent=`${nombre} su IMC es de peso ideal : ${imc.toFixed(1)}`;
        const imagen = document.createElement("img");
        imagen.src =  "img/ideal.png" ;
        resultado.appendChild(imagen);
    }else if(imc >=25 && imc<26.9){
        resultado.textContent=`${nombre} su IMC es de sobre peso gardo 1: ${imc.toFixed(1)}`;
        const imagen = document.createElement("img");
        imagen.src = "img/obesidad.png";
        resultado.appendChild(imagen);
    }else if(imc >=27 && imc<29.9){
        resultado.textContent=`${nombre} su IMC es de sobre peso gardo 2: ${imc.toFixed(1)}`;
        const imagen = document.createElement("img");
        imagen.src = "img/sobrepeso.png";
        resultado.appendChild(imagen);
    }else if(imc >=30 && imc<34.9){
        resultado.textContent=`${nombre} su IMC es de obesidad tipo 1: ${imc.toFixed(1)}`;
        const imagen = document.createElement("img");
        imagen.src = "img/obesidad.png";
        resultado.appendChild(imagen);
    }else if(imc >=35 && imc<39.9){
        resultado.textContent=`${nombre} su IMC es de obesidad tipo 2: ${imc.toFixed(1)}`;
        const imagen = document.createElement("img");
        imagen.src = "img/obesidadsevera.png";
        resultado.appendChild(imagen);
    }else if(imc >=40 && imc<49.9){
        resultado.textContent=`${nombre} su IMC es de obesidad tipo 3: ${imc.toFixed(1)}`;
        const imagen = document.createElement("img");
        imagen.src = "img/obesidadmorvida.png";
        resultado.appendChild(imagen);
    }else if(imc > 50){
        resultado.textContent=`${nombre} su IMC es de obesidad tipo 1: ${imc.toFixed(1)}`;
        const imagen = document.createElement("img");
        imagen.src = "img/obesidadmorvida.png";
        resultado.appendChild(imagen);
    }else 
        console.log=("revise los valores de entrada");
    

}