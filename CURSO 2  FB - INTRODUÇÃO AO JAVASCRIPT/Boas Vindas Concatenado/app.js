/*DEFINIÇÃO DE VARIAVEIS*/

var js_nome;
var js_sobrenome;
var js_nomecompleto

function concatena() {
    
    /*ENTRADA DE DADOS*/

    js_nome = document.FormConcatena.f_nome.value;
    js_sobrenome = document.FormConcatena.f_sobrenome.value;
    js_nomecompleto = js_nome + ' ' + js_sobrenome;
    
    /* SAIDA DE DADOS */
    
    window.alert('Olá ' + js_nomecompleto);  
}
