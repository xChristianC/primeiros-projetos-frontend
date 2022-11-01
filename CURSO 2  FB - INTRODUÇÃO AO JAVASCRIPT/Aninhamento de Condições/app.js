// Definição de Váriaveis

var h_trb // Horas trabalhadas - Variavel de Entrada
var v_htrb // Valor da Hora trabalhada - Variavel de Entrada
var d_inss // Percentual de Desconto INSS - Variavel de Entrada
var d_total // Desconto Total - Variavel de SAida
var v_sb // Valor salario Bruto - Variavel de Saida
var v_sl // Valor salario Liquido - Variavel de saida

// Coleta de Dados

function verif() {
    h_trb = parseFloat(document.FormSal.h_trb.value);
    v_htrb = parseFloat(document.FormSal.v_htrb.value);
    d_inss = parseFloat(document.FormSal.d_inss.value);
    
// Processamento de Dados

    v_sb = v_htrb * h_trb;
    d_total = (d_inss/100) * v_sb;
    v_sl = v_sb - d_total;

// Saída de Dados Com Consistencia de Valores

    // document.write('<p><b>DEMONSTRATIVO PARA CÁLCULO DO SALÁRIO LÍQUIDO</b>');

    document.FormSal.horatrab.value=(h_trb + ' h');
    if (h_trb > 180) {
        document.FormSal.horatrab.value=('Valor Máximo Excedido!');
    }

    if (h_trb < 135) {
        document.FormSal.horatrab.value=('Valor mínimo Inválido!');    
    }
    document.FormSal.valorhora.value=('R$ ' + v_htrb);
    if (v_htrb > 50) {
        document.FormSal.valorhora.value=('Valor Máximo Excedido!');    
    }

    if (v_htrb < 25) {
        document.FormSal.valorhora.value=('Valor mínimo Inválido!'); 
    }
    document.FormSal.pdescont.value=(d_inss + ' %');
    if (d_inss > 15) {
        document.FormSal.pdescont.value=('Valor Máximo Excedido!');    
    }

    if (d_inss < 5) {
        document.FormSal.pdescont.value=('Valor mínimo Inválido!'); 
    }
    document.FormSal.sbrut.value=('R$'+ v_sb);
    document.FormSal.totd.value=('R$ ' + d_total);
    document.FormSal.sliquid.value=('R$ ' + v_sl);
   

// Saída com aninhamento de IF

    if (v_sl > 10500) {
        document.FormSal.msg.value=('Salário Elevado!  ');
        document.FormSal.msg2.value=('Maior que R$10.500');
    }
    else{
        if (v_sl > 6000) {
            document.FormSal.msg.value=('Salário Satisfatório!');
            document.FormSal.msg2.value=('Maior que R$6.000');
        }
        else{
            if (v_sl > 3000) {
                document.FormSal.msg.value=('Salário Moderado!');
                document.FormSal.msg2.value=('Maior que R$3.000');
            }
            else{
                document.FormSal.msg.value=('Salário Insatisfatório!');
                document.FormSal.msg2.value=('Menor ou igual a R$3.000');
            }
        }
    } 



}