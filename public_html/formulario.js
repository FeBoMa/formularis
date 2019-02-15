/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var numForm = 0;
var numInput = 0;

var nombreForm = document.getElementById("nombreForm");
var contenido = document.getElementById("contenido");



function genera_formulario() {

    var idFormActual=document.getElementById("nombreForm").value;
    var formulario = document.createElement('FORM');
    formulario.id = nombreForm.value;
    formulario.method = 'POST';


    
    var divBotones = document.createElement('div'); 
    divBotones.id = 'divbtn';
    
     var divInputs = document.createElement('div'); 
    divInputs.id = 'divInputs';
    

    var btnInput = document.createElement('INPUT');

    btnInput.type = 'button';
    btnInput.name = 'añadirInput';
    btnInput.id = 'input';

    btnInput.value = "Añadir Input";

    btnInput.onclick = function (e) {
        
       
        var etiquetaInput = document.createElement('INPUT');
        etiquetaInput.type = 'TEXT';
        
        var item = document.getElementById(idFormActual);
        divInputs.appendChild(etiquetaInput);
    }


    divBotones.appendChild(btnInput);
    formulario.appendChild(divBotones);
    formulario.appendChild(divInputs);
    contenido.appendChild(formulario);
    numForm++;
}

function borrar_formulario() {

    //alert(document.getElementById("nombreForm").value);
    //document.getElementsById(document.getElementById("nombreForm").value).remove();
    var item = document.getElementById(document.getElementById("nombreForm").value);
    contenido.removeChild(item);
}