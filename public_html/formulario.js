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

    //DIV-------------------------------------------------------------------------
    var formulario = document.createElement('FORM');
    formulario.id = nombreForm.value;
    formulario.method = 'POST';

    var divInputs = document.createElement('div');
    divInputs.id = 'divInputs';

    var divRadioButton = document.createElement('div');
    divRadioButton.id = 'divRadioButton';

   //INPUTS---------------------------------------------------------------

    var tabDivInputs = document.createElement("TABLE");
    tabDivInputs.setAttribute("id", "tabDivInputs");
    divInputs.appendChild(tabDivInputs);

    var trTabDivInp = document.createElement("TR");
    trTabDivInp.setAttribute("id", "trTabDivInp");
    tabDivInputs.appendChild(trTabDivInp);

  //SELECCCION INPUT
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

 // BOTÓN AÑADIR INPUT
    var btnInput = document.createElement('INPUT');
    btnInput.type = 'button';
    btnInput.name = 'añadirInput';
    btnInput.id = 'input';
    btnInput.value = "Añadir Input";

    var tdTabInput = document.createElement("TD");
    tdTabInput.appendChild(btnInput);
    trTabDivInp.appendChild(tdTabInput);


// ONCLICK INPUT

    btnInput.onclick = function () {
        var trTabInp = document.createElement("TR");
        trTabInp.setAttribute("id", "trInput");
        tabDivInputs.appendChild(trTabInp);

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
            tabDivInputs.removeChild(trTabInp);
        }
    }

    //RADIO BUTTON-------------------------------------------------------------
    var tabDivRB = document.createElement("TABLE");
    tabDivRB.setAttribute("id", "tabDivRB");
    divRadioButton.appendChild(tabDivRB);


    var trTabDivRB = document.createElement("TR");
    trTabDivRB.setAttribute("id", "trTabDivRB");
    tabDivRB.appendChild(trTabDivRB);

    var txtRadio = document.createElement('INPUT');
    txtRadio.type = 'text';
    txtRadio.id = 'txtRadio';


    var tdTabtxtRB = document.createElement("TD");
    tdTabtxtRB.appendChild(txtRadio);
    trTabDivRB.appendChild(tdTabtxtRB);

    var btnRadio = document.createElement('INPUT');
    btnRadio.type = 'button';
    btnRadio.name = 'añadirRadio';
    btnRadio.id = 'inputRadio';
    btnRadio.value = "Añadir Radio";

    var tdRadio = document.createElement("TD");
    tdRadio.appendChild(btnRadio);
    trTabDivRB.appendChild(tdRadio);
    
  // ONCLICK RADIO

    btnRadio.onclick = function () {
        
        var trTabDivRB = document.createElement("TR");
        trTabDivRB.setAttribute("id", "trInput");
        tabDivRB.appendChild(trTabDivRB);

       var radioCreate = document.createElement('INPUT');
       radioCreate.type='radio';
       radioCreate.id='radio1';
       radioCreate.value=txtRadio.value;
       radioCreate.textContent=txtRadio.value;
       radioCreate.name='grupo';
       
       var label = document.createElement('LABEL');
       label.value='ggg';
       
 
        var tdRadio= document.createElement("TD");
        tdRadio.id='idRadio';
        tdRadio.appendChild(radioCreate);
        trTabDivRB.appendChild(tdRadio);
        

        var btnEdit = document.createElement('INPUT');
        btnEdit.type = 'button';
        btnEdit.name = 'edit';
        btnEdit.id = 'edit';
        btnEdit.value = "Edit";

        var tdTabBtnEdit = document.createElement("TD");
        tdTabBtnEdit.appendChild(btnEdit);
        trTabDivRB.appendChild(tdTabBtnEdit);


        btnEdit.onclick = function () {
            radioCreate.value = txtRadio.value;
            radioCreate.textContent=txtRadio.value;
        }

        var btnDel = document.createElement('INPUT');
        btnDel.type = 'button';
        btnDel.name = 'del';
        btnDel.id = 'del';
        btnDel.value = "Eliminar";

        var tdTabBtnDel = document.createElement("TD");
        tdTabBtnDel.appendChild(btnDel);
        trTabDivRB.appendChild(tdTabBtnDel);


        btnDel.onclick = function () {
            tabDivInputs.removeChild(trTabDivRB);
        }
    }

//
    divInputs.appendChild(tabDivInputs);
    formulario.appendChild(divInputs);
    contenido.appendChild(formulario);
    divRadioButton.appendChild(tabDivRB);
    formulario.appendChild(divRadioButton);
}

function borrar_formulario() {

    //alert(document.getElementById("nombreForm").value);
    //document.getElementsById(document.getElementById("nombreForm").value).remove();
    var item = document.getElementById(document.getElementById("nombreForm").value);
    contenido.removeChild(item);
}

