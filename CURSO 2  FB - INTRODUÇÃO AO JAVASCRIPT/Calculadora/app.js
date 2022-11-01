/*DEFINIÇÃO DE VARIAVEIS*/

var js_num1;
var js_num2;
var js_soma;

    /* ENTRADA DE DADOS */

function soma() {
    
    /*RECOLHIMENTO DE DADOS*/

        /*NUMEROS INTEIROS*/

    js_num1 = parseInt(document.FormSomar.f_num1.value);
    js_num2 = parseInt(document.FormSomar.f_num2.value);
    
        /*NUMEROS FLUTUANTES*/
    // js_num1 = parseFloat(document.FormSomar.f_num1.value);
    // js_num2 = parseFloat(document.FormSomar.f_num2.value);

    /*TRATAMENTO DOS DADOS*/

    js_soma = js_num1 + js_num2;

    /* SAIDA DE DADOS */

    window.alert('A soma dos números é: ' + js_soma.toString()); 
}
    
    
     

