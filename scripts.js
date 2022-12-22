/* vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

? `La letra "e" es convertida para "enter"`
? `La letra "i" es convertida para "imes"`
? `La letra "a" es convertida para "ai"`
? `La letra "o" es convertida para "ober"`
? `La letra "u" es convertida para "ufat"`

TODO: Requisitos:
    - Debe funcionar solo con letras minúsculas
! - No deben ser utilizados letras con acentos ni caracteres especiales
  - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. */

let textoIngresado = document.querySelector('#textoIngresado');
let resultado = document.querySelector('#resultado');
let textoOriginal = "";
let copiarResultado = document.querySelector('#resultado');


const encriptar = () =>{
        textoOriginal = textoIngresado.value;
        
        
       if(textoIngresado.value != ""){
            
            textoIngresado.value = textoIngresado.value.replace(/e/g, "enter");
            textoIngresado.value = textoIngresado.value.replace(/i/g, "imes");
            textoIngresado.value = textoIngresado.value.replace(/a/g, "ai");
            textoIngresado.value = textoIngresado.value.replace(/o/g, "ober");
            textoIngresado.value = textoIngresado.value.replace(/u/g, "ufat");
            resultado.textContent = textoIngresado.value;
            document.getElementById("ocultar").style.display = "none";             
             
            }else{
                resultado.textContent = "Ningun mensaje fue encontrado";
                document.getElementById("ocultar").style.display = "block";
            } 
            
            textoIngresado.value = textoOriginal;
};

const desEncriptar = () =>{
        textoOriginal = textoIngresado.value;
        
       if(textoIngresado.value != ""){
            
            textoIngresado.value = textoIngresado.value.replace(/enter/g, "e");
            textoIngresado.value = textoIngresado.value.replace(/imes/g, "i");
            textoIngresado.value = textoIngresado.value.replace(/ai/g, "a");
            textoIngresado.value = textoIngresado.value.replace(/ober/g, "o");
            textoIngresado.value = textoIngresado.value.replace(/ufat/g, "u");
            resultado.textContent = textoIngresado.value;

            document.getElementById("ocultar").style.display = "none";            
             
            }else{
                resultado.textContent = "Ningun mensaje fue encontrado";
                document.getElementById("ocultar").style.display = "block";
            } 
            
            textoIngresado.value = textoOriginal;
};

/* copiar texto encriptado o desencriptado */

const copiarAlPortapapeles = () => {
    var enlace = document.getElementById("resultado");
    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", enlace.innerHTML);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
    alert("Copiado al portapapeles!");
};

/* botones */

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desEncriptar);
btnCopiar.addEventListener("click", copiarAlPortapapeles);