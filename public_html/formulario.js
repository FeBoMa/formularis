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

    formulario.setAttribute("border", "1");
    formulario.style.width = "400px";
    formulario.style.height = "400px";
    formulario.style.background = "red";

    var btnInput = document.createElement('INPUT');

    btnInput.type = 'button';
    btnInput.name = 'añadirInput';
    btnInput.id = 'input';

    btnInput.value = "Añadir Input";

    btnInput.onclick = function (e) {
        
       
        var etiquetaInput = document.createElement('INPUT');
        etiquetaInput.type = 'TEXT';
        
        var item = document.getElementById(idFormActual);
        item.appendChild(etiquetaInput);
    }



    formulario.appendChild(btnInput);
    contenido.appendChild(formulario);
    numForm++;
}

function borrar_formulario() {

    //alert(document.getElementById("nombreForm").value);
    //document.getElementsById(document.getElementById("nombreForm").value).remove();
    var item = document.getElementById(document.getElementById("nombreForm").value);
    contenido.removeChild(item);
}

function anadir_input() {

    var my_tb = document.createElement('INPUT');
    my_tb.type = 'TEXT';
    my_tb.name = 'myInput';
    my_tb.id = numInput;
    numInput++;

    var item = document.getElementById(document.getElementById("nombreForm").value);
    item.appendChild(my_tb);
}
   