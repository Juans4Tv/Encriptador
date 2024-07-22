//                <img src="./Image/Muñeco.png" alt="Imagen de busqueda">
//validacion de texto
document.getElementById('copiar').style.display='none';

function validateText(text) {
    let regex = /^[a-z\s]+$/;
    return regex.test(text);
}

//encriptacion de texto
function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let errorMessage = document.getElementById('errorMessage');

    if (!validateText(inputText)) {
        errorMessage.textContent = '! El texto solo debe contener letras minúsculas y sin acentos.';
        document.getElementById('outputText').value = '';
        return;
    }

    errorMessage.textContent = '';
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
}

//desencriptador de texto 
function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let errorMessage = document.getElementById('errorMessage');

    if (!validateText(inputText)) {
        errorMessage.textContent = 'El texto solo debe contener letras minúsculas y sin acentos.';
        document.getElementById('outputText').value = '';
        return;
    }

    errorMessage.textContent = '';
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
}


function Control(){
    let trato= document.getElementById('outputText').value;
    if(trato!=0){
        document.getElementById('Superponer').style.visibility='hidden';
        document.getElementById('copiar').style.display='block';
    }
    else{
        document.getElementById('Superponer').style.visibility='visible';
        document.getElementById('copiar').style.display='none';

    }



}
function copiar(){

    let copy= document.getElementById("outputText").value;
    navigator.clipboard.writeText(copy);
}

// scripts.js
