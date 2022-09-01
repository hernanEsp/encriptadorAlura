<<<<<<< HEAD
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var muñeco = document.querySelector(".doll-container");
var titulo = document.querySelector(".title-container");
var parrafo = document.querySelector(".paragraph-container");
var textoResultado = document.querySelector(".text-result");
var botonCopiar = document.querySelector(".copi");
var result = document.getElementById('result')

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

botonCopiar.addEventListener('click', e =>{
    result[0].select();
    document.execCommand('copy');
});


function encriptar(){
    var texto = recuperarArea();
    if(texto !== ""){
        ocultar();
        mostrar();
        textoResultado.textContent = encriptarTexto(texto);
    }
}

function desencriptar(){
    var texto = recuperarArea();
    if(texto !== ""){
        ocultar();
        mostrar()
        textoResultado.textContent = desencriptarTexto(texto);
    }
}

function recuperarArea(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultar(){
    muñeco.classList.add("hide");
    titulo.classList.add("hide");
    parrafo.classList.add("hide");
}

function mostrar(){
    var resultado = document.querySelector(".result-container");
    var botonCopiar = document.querySelector(".copiar"); 
    
    resultado.classList.remove("hide");
    botonCopiar.classList.remove("hide");
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "a";
            i+=1;
        }
        else if(texto[i] == "e"){
            textoFinal += "e";
            i+=4;
        }
        else if(texto[i] == "i"){
            textoFinal += "i";
            i+=3;
        }
        else if(texto[i] == "o"){
            textoFinal += "o";
            i+=3;
        }
        else if(texto[i] == "u"){
            textoFinal += "u";
            i+=3;
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
=======
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var muñeco = document.querySelector(".doll-container");
var titulo = document.querySelector(".title-container");
var parrafo = document.querySelector(".paragraph-container");
var textoResultado = document.querySelector(".text-result");

botonEncriptar.onclick = encriptar;

function encriptar(){
    var texto = recuperarArea();
    if(texto !== ""){
        ocultar();
        mostrar();
        textoResultado.textContent = texto;
    }
}

function recuperarArea(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultar(){
    muñeco.classList.add("hide");
    titulo.classList.add("hide");
    parrafo.classList.add("hide");
}

function mostrar(){
    var resultado = document.querySelector(".result-container");
    var botonCopiar = document.querySelector(".copiar"); 
    
    resultado.classList.remove("hide");
    botonCopiar.classList.remove("hide");
}


function encriptarTexto(mensaje){
    var
>>>>>>> 0dad07607432eaa8ef6c457d06cfe563cbde3ac9
}