/* Objetivo: Utilizando o recurso de seleção multipla - switch...case, pesquisar o nome do mes de referencia atraves do respectivo numero do mes informado.
 -   Objeitos / Metodos utilizados :
        Entrada: document.form (entrada de dados via formulario)
        Saída: document.form (sáida de dados via formulario)
 -   Importante:
        Os campos do formulario serao identificados com o prefixo f_ => Exemplo: f_mes
        Os campos do JavaScript serao identificados com o prefixo js_ => Exemplo: js_mes
*/


/* Definição de Variaveis*/

var js_mes;

/*Inicio da função verificames()*/

function verif() {
    js_mes=parseInt(document.formcalend.f_mes.value);

    switch (js_mes){
        case 1 : document.formcalend.f_nomemes.value = 'Janeiro'; break;
        case 2 : document.formcalend.f_nomemes.value = 'Fevereiro'; break;
        case 3 : document.formcalend.f_nomemes.value = 'Março'; break;
        case 4 : document.formcalend.f_nomemes.value = 'Abril'; break;
        case 5 : document.formcalend.f_nomemes.value = 'Maio'; break;
        case 6 : document.formcalend.f_nomemes.value = 'Junho'; break;
        case 7 : document.formcalend.f_nomemes.value = 'Julho'; break;
        case 8 : document.formcalend.f_nomemes.value = 'Agosto'; break;
        case 9 : document.formcalend.f_nomemes.value = 'Setembro'; break;
        case 10 : document.formcalend.f_nomemes.value = 'Outubro'; break;
        case 11 : document.formcalend.f_nomemes.value = 'Novembro'; break;
        case 12 : document.formcalend.f_nomemes.value = 'Dezembro'; break;
    default : document.formcalend.f_nomemes.value = '** Mês Inválido! **'; break;

    }
}