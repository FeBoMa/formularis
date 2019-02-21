/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var numForm = 0;
var numInput = 0;

var nombreForm = document.getElementById("nombreForm");
var contenido = document.getElementById("contenido");
var btndel = document.getElementById("btndel");


function genera_formulario() {

    //DIV-------------------------------------------------------------------------
    var formulario = document.createElement('FORM');
    formulario.id = nombreForm.value;
    formulario.method = 'POST';

    var divInputs = document.createElement('div');
    divInputs.id = 'divInputs';

    var divRadioButton = document.createElement('div');
    divRadioButton.id = 'divRadioButton';

    var divRadioCH = document.createElement('div');
    divRadioCH.id = 'divRadioCH';

    var divList = document.createElement('div');
    divRadioCH.id = 'divList';

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
        radioCreate.type = 'radio';
        radioCreate.id = 'radio';
        radioCreate.value = txtRadio.value;
        radioCreate.textContent = txtRadio.value;
        radioCreate.name = 'grupo';

        var label = document.createElement('LABEL');
        label.textContent = txtRadio.value;

        var tdRadio = document.createElement("TD");
        tdRadio.id = 'idRadio';
        tdRadio.appendChild(label);
        trTabDivRB.appendChild(tdRadio);

        tdRadio.insertBefore(radioCreate, label);

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
            label.textContent = txtRadio.value;
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
            tabDivRB.removeChild(trTabDivRB);
        }
    }

//CHECK BOX--------------------------------------------------------------------

    var tabDivCH = document.createElement("TABLE");
    tabDivCH.setAttribute("id", "tabDivCH");
    divRadioCH.appendChild(tabDivCH);

    var trTabDivCH = document.createElement("TR");
    trTabDivCH.setAttribute("id", "trTabDivCH");
    tabDivCH.appendChild(trTabDivCH);

    var txtCheck = document.createElement('INPUT');
    txtCheck.type = 'text';
    txtCheck.id = 'txtRadio';

    var tdTabtxtCH = document.createElement("TD");
    tdTabtxtCH.appendChild(txtCheck);
    trTabDivCH.appendChild(tdTabtxtCH);

    var btnCheck = document.createElement('INPUT');
    btnCheck.type = 'button';
    btnCheck.name = 'añadirCheck';
    btnCheck.id = 'inputCheck';
    btnCheck.value = "Añadir CheckBox";

    var tdCheck = document.createElement("TD");
    tdCheck.appendChild(btnCheck);
    trTabDivCH.appendChild(btnCheck);

    //ONCLICK CHECKBOX

    btnCheck.onclick = function () {

        var trTabDivCH = document.createElement("TR");
        trTabDivCH.setAttribute("id", "trInput");
        tabDivCH.appendChild(trTabDivCH);

        var checkCreate = document.createElement('INPUT');
        checkCreate.type = 'checkbox';
        checkCreate.id = 'checkbox';
        checkCreate.value = txtCheck.value;
        checkCreate.textContent = txtCheck.value;
        checkCreate.name = 'grupo';

        var label = document.createElement('LABEL');
        label.textContent = txtCheck.value;

        var tdCheck = document.createElement("TD");
        tdCheck.id = 'idCheck';
        tdCheck.appendChild(label);
        trTabDivCH.appendChild(tdCheck);

        tdCheck.insertBefore(checkCreate, label);

        var btnEdit = document.createElement('INPUT');
        btnEdit.type = 'button';
        btnEdit.name = 'edit';
        btnEdit.id = 'edit';
        btnEdit.value = "Edit";

        var tdTabBtnEdit = document.createElement("TD");
        tdTabBtnEdit.appendChild(btnEdit);
        trTabDivCH.appendChild(tdTabBtnEdit);


        btnEdit.onclick = function () {
            checkCreate.value = txtCheck.value;
            label.textContent = txtCheck.value;
        }

        var btnDel = document.createElement('INPUT');
        btnDel.type = 'button';
        btnDel.name = 'del';
        btnDel.id = 'del';
        btnDel.value = "Eliminar";

        var tdTabBtnDel = document.createElement("TD");
        tdTabBtnDel.appendChild(btnDel);
        trTabDivCH.appendChild(tdTabBtnDel);


        btnDel.onclick = function () {
            tabDivCH.removeChild(trTabDivCH);
        }
    }

//------------------------------------------------------------------------------

    var tabDivList = document.createElement("TABLE");
    tabDivList.setAttribute("id", "tabDivList");
    divList.appendChild(tabDivList);

    var trtabDivList = document.createElement("TR");
    trtabDivList.setAttribute("id", "trtabDivList");
    tabDivList.appendChild(trtabDivList);

    var txtList = document.createElement('INPUT');
    txtList.type = 'text';
    txtList.id = 'txtRadio';

    var tdtabDivList = document.createElement("TD");
    tdtabDivList.appendChild(txtList);
    trtabDivList.appendChild(tdtabDivList);


    // BOTÓN AÑADIR INPUT
    var btnList = document.createElement('INPUT');
    btnList.type = 'button';
    btnList.name = 'btnList';
    btnList.id = 'btnList';
    btnList.value = "Añadir Lista";

    var tdTabList = document.createElement("TD");
    tdTabList.appendChild(btnList);
    trtabDivList.appendChild(tdTabList);

    btnList.onclick = function () {

        var trtabDivList = document.createElement("TR");
        trtabDivList.setAttribute("id", "trInput");
        tabDivList.appendChild(trtabDivList);


        var listAdd = document.createElement("SELECT");
        listAdd.setAttribute("id", "listAdd");

        var listOP = document.createElement("option");
        listOP.setAttribute("value", txtList.value);
        var lpTextTxt = document.createTextNode(txtList.value);
        listOP.appendChild(lpTextTxt);
        listAdd.appendChild(listOP);


        var tdList = document.createElement("TD");
        tdList.id = 'tdList';
        tdList.appendChild(listAdd);
        trtabDivList.appendChild(tdList);


        var btnEdit = document.createElement('INPUT');
        btnEdit.type = 'button';
        btnEdit.name = 'edit';
        btnEdit.id = 'edit';
        btnEdit.value = "Añadir Opción";

        var tdListBtnEd = document.createElement("TD");
        tdListBtnEd.appendChild(btnEdit);
        trtabDivList.appendChild(tdListBtnEd);


        btnEdit.onclick = function () {
            var listOP = document.createElement("option");
            listOP.setAttribute("value", txtList.value);
            var lpTextTxt = document.createTextNode(txtList.value);
            listOP.appendChild(lpTextTxt);
            listAdd.appendChild(listOP);
        }


        var btnDelOp = document.createElement('INPUT');
        btnDelOp.type = 'button';
        btnDelOp.name = 'delOp';
        btnDelOp.id = 'delOp';
        btnDelOp.value = "Eliminar Opción";

        var tdTabBtnDelOp = document.createElement("TD");
        tdTabBtnDelOp.appendChild(btnDelOp);
        trtabDivList.appendChild(tdTabBtnDelOp);


        btnDelOp.onclick = function () {
            listAdd.remove(listAdd.selectedIndex);
        }



        var btnDel = document.createElement('INPUT');
        btnDel.type = 'button';
        btnDel.name = 'del';
        btnDel.id = 'del';
        btnDel.value = "Eliminar";

        var tdTabBtnDel = document.createElement("TD");
        tdTabBtnDel.appendChild(btnDel);
        trtabDivList.appendChild(tdTabBtnDel);


        btnDel.onclick = function () {
            tabDivList.removeChild(trtabDivList);
        }
    }

//------------------------------------------------------------------------------
//Añadimos el formulario al arbol como hijo de contenido
    contenido.appendChild(formulario);
//Añadimos el div y la tabla(tabDivInputs) de los inputs al formulario
    formulario.appendChild(divInputs);
    divInputs.appendChild(tabDivInputs);
//Añadimos el div y la tabla(tabDivInputs) de los radiobutton al formulario
    formulario.appendChild(divRadioButton);
    divRadioButton.appendChild(tabDivRB);
//Añadimos el div y la tabla(tabDivInputs) de los checkbox al formulario
    formulario.appendChild(divRadioCH);
    divRadioCH.appendChild(tabDivCH);
//
    formulario.appendChild(divList);
    divRadioCH.appendChild(tabDivList);

}


function borrar_formulario() {
    //alert(document.getElementById("nombreForm").value);
    //document.getElementsById(document.getElementById("nombreForm").value).remove();
    var item = document.getElementById(document.getElementById("nombreForm").value);
    contenido.removeChild(item);
}
