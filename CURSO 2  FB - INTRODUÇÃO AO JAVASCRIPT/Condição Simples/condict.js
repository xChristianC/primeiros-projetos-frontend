// Definição de variaveis 

var resp_num1;
var resp_num2;
var resp_ver;

function verif() {

    // Entrada de dados
    resp_num1 = parseInt(document.FormVer.resp_num1.value);
    resp_num2 = parseInt(document.FormVer.resp_num2.value);

    // Saida de Dados sem Classificação
    document.write('O primeiro número digitado foi: ' + resp_num1);
    document.write('<br>O Segundo número digitado foi: ' + resp_num2);

    // Saida de Dados com classificação por decisão condicional simples(if)
       
        /* if(resp_num1 > resp_num2) {
         resp_ver = resp_num1;
         resp_num1 = resp_num2;
         resp_num2 = resp_ver
        } */

    // Saida de Dados com classificação por decisão condicional composta (if / else)
        if(resp_num1 < resp_num2) {
            document.write('<br>A ordem Crescente dos números é: ' + resp_num1 + ' e ' + resp_num2);
         }
        else{
            document.write('<br>A ordem Crescente dos números é: ' + resp_num2 + ' e ' + resp_num1);
        }
}