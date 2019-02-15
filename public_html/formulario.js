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
    divBotones.id = 'divbtn';

    var divInputs = document.createElement('div');
    divInputs.id = 'divInputs';

    var tabDivInputs = document.createElement("TABLE");
    tabDivInputs.setAttribute("id", "tabDivInputs");
    divInputs.appendChild(tabDivInputs);

    var trTabDivInp = document.createElement("TR");
    trTabDivInp.setAttribute("id", "trTabDivInp");
    tabDivInputs.appendChild(trTabDivInp);

    var listSelect = document.createElement("SELECT");
    listSelect.setAttribute("id", "listSelect");

    var lpTextVal = document.createElement("option");
    lpTextVal.setAttribute("value", "text");
    var lpTextTxt = document.createTextNode("text");
    lpTextVal.appendChild(lpTextTxt);
    listSelect.appendChild(lpTextVal);

    var lpPassVal = document.createElement("option");
    lpPassVal.setAttribute("value", "password");
    var lpPassTxt = document.createTextNode("password");
    lpPassVal.appendChild(lpPassTxt);
    listSelect.appendChild(lpPassVal);

    var lpDataVal = document.createElement("option");
    lpDataVal.setAttribute("value", "data");
    var lpDataTxt = document.createTextNode("data");
    lpDataVal.appendChild(lpDataTxt);
    listSelect.appendChild(lpDataVal);

    var lpEmailVal = document.createElement("option");
    lpEmailVal.setAttribute("value", "email");
    var lpEmailTxt = document.createTextNode("email");
    lpEmailVal.appendChild(lpEmailTxt);
    listSelect.appendChild(lpEmailVal);

    var lpRangeVal = document.createElement("option");
    lpRangeVal.setAttribute("value", "range");
    var lpRangeTxt = document.createTextNode("range");
    lpRangeVal.appendChild(lpRangeTxt);
    listSelect.appendChild(lpRangeVal);

    var lpFileVal = document.createElement("option");
    lpFileVal.setAttribute("value", "file");
    var lpFileTxt = document.createTextNode("file");
    lpFileVal.appendChild(lpFileTxt);
    listSelect.appendChild(lpFileVal);


    var tdTabInputType = document.createElement("TD");
    tdTabInputType.appendChild(listSelect);
    trTabDivInp.appendChild(tdTabInputType);

    var btnInput = document.createElement('INPUT');
    btnInput.type = 'button';
    btnInput.name = 'añadirInput';
    btnInput.id = 'input';
    btnInput.value = "Añadir Input";

    var tdTabInput = document.createElement("TD");
    tdTabInput.appendChild(btnInput);
    trTabDivInp.appendChild(tdTabInput);


    var tabInputs = document.createElement("TABLE");
    tabInputs.setAttribute("id", "tabInputs");
    divInputs.appendChild(tabInputs);

    btnInput.onclick = function () {
        var trTabInp = document.createElement("TR");
        trTabInp.setAttribute("id", "trInput");
        tabInputs.appendChild(trTabInp);

        var etiquetaInput = document.createElement('INPUT');
        etiquetaInput.type = listSelect.value;

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
            etiquetaInput.type = listSelect.value;
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


    divBotones.appendChild(tabDivInputs);
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
