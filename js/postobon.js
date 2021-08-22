/**
 * Hacer un programa en JS para ayudar a un trabajador de Postobón a saber cuál será su sueldo semanal, se sabe que, si trabaja 40 horas o menos, se le pagará $20000 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25000 por hora. (Reciba el número de horas del empleado)
 */

//1. Creo la referencias de las etiquetas que quiero controlar
let etiquetaNombre = document.getElementById("nombre");
let etiquetaHoras = document.getElementById("horas");
let botonCalcular = document.getElementById("botonCalcular");
let resultado = document.getElementById("resultado");




//2. Configuro mi escuchador de vento de clic sobre el botón calcular
botonCalcular.addEventListener("click",validarFormulario)

//3. Crear la función encargada de activarse al momento de hacer clic en el boton
function validarFormulario(){

    let nombre = etiquetaNombre.value;
    let horas = Number(etiquetaHoras.value);
    


    if(nombre=="" && horas==0 ){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.add("is-invalid");
    }else if(nombre==""){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
    }else if(horas==0){
        etiquetaHoras.classList.add("is-invalid");
        etiquetaNombre.classList.remove("is-invalid");
    }else{
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        //llamar funcion para calcular IMC
        calcularSalario(horas,nombre);
    }
    
    

}

//4. Funcion para calcular el indice de masa corporal

function calcularSalario(horas,nombre){
     
    if(horas<=40){
        let salario = horas * 20000;
        resultado.textContent =`${nombre} su sueldo es de: ${salario} cop sin horas extras` ;
        const imagen = document.createElement("img");
        imagen.src = "http://3.bp.blogspot.com/_5VeJu8yLIYc/R-WE9_gEKjI/AAAAAAAAAuY/TicHG2AHhtM/w1200-h630-p-k-no-nu/tiorico.jpg";
        resultado.appendChild(imagen);

    }else if(horas > 40){
        let salario = ((horas-40)*25000)+800000;
        
        resultado.textContent=`${nombre} su sueldo es de: ${salario} cop con horas extras`;
        const imagen = document.createElement("img");
        imagen.src = "http://1.bp.blogspot.com/-1KhoX4KR7eo/Uq4MXSt2fFI/AAAAAAAAEMg/r38wiJtbZSU/s1600/tio-patilludo.jpg";
        resultado.appendChild(imagen);
    }else { console.log=("revise los valores de entrada");
    }
    
    

}