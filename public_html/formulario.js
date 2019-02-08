/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var numForm=0;

function genera_formulario() {

    formulario = document.createElement('FORM');
    formulario.name = 'myForm'+numForm;
    formulario.method = 'POST';

    my_tb = document.createElement('INPUT');
    my_tb.type = 'TEXT';
    my_tb.name = 'myInput';
    formulario.appendChild(my_tb);

    formulario.setAttribute("border", "1");
    formulario.style.width = "400px";
    formulario.style.height = "400px";
    formulario.style.background = "red";


    formulario.appendChild(my_tb);
    document.body.appendChild(formulario);

   numForm++;




}
   