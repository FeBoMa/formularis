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

    //var idFormActual = document.getElementById("nombreForm").value;
    var formulario = document.createElement('FORM');
    formulario.id = nombreForm.value;
    formulario.method = 'POST';

    var divBotones = document.createElement('div');
    formulario.style.width = "400px";

    var divBotones = document.createElement('div');
    divBotones.id = 'divbtn';

    var divInputs = document.createElement('div');
    divInputs.id = 'divInputs';

    var btnInput = document.createElement('INPUT');
    btnInput.type = 'button';
    btnInput.name = 'añadirInput';
    btnInput.id = 'input';
    btnInput.value = "Añadir Input";

    var tabInputs = document.createElement("TABLE");
    tabInputs.setAttribute("id", "tabInputs");
    divInputs.appendChild(tabInputs);

    btnInput.onclick = function () {
        var trTabInp = document.createElement("TR");
        trTabInp.setAttribute("id", "trInput");
        tabInputs.appendChild(trTabInp);

        var etiquetaInput = document.createElement('INPUT');
        etiquetaInput.type = 'TEXT';

        var tdTabInput = document.createElement("TD");
        tdTabInput.appendChild(etiquetaInput);
        trTabInp.appendChild(tdTabInput);

        var btnEdit = document.createElement('INPUT');
        btnEdit.type = 'button';
        btnEdit.name = 'edit';
        btnEdit.id = 'edit';
        btnEdit.value = "Edit";

        var tdTabBtnEdit = document.createElement("TD");
        tdTabBtnEdit.appendChild(btnEdit);
        trTabInp.appendChild(tdTabBtnEdit);


        btnEdit.onclick = function () {
            
        }

        var btnDel = document.createElement('INPUT');
        btnDel.type = 'button';
        btnDel.name = 'del';
        btnDel.id = 'del';
        btnDel.value = "Eliminar";

        var tdTabBtnDel = document.createElement("TD");
        tdTabBtnDel.appendChild(btnDel);
        trTabInp.appendChild(tdTabBtnDel);


        btnDel.onclick = function () {
            tabInputs.removeChild(trTabInp);
        }
    }


    divBotones.appendChild(btnInput);
    formulario.appendChild(divBotones);
    formulario.appendChild(divInputs);
    contenido.appendChild(formulario);
}

function borrar_formulario() {

    //alert(document.getElementById("nombreForm").value);
    //document.getElementsById(document.getElementById("nombreForm").value).remove();
    var item = document.getElementById(document.getElementById("nombreForm").value);
    contenido.removeChild(item);
}
