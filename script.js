/* ANIMAÇÃO AO ABRIR AS OPTIONS */

const meuSelect1 = document.getElementById('meuSelect1');
const meuSelect2 = document.getElementById('meuSelect2');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');


meuSelect1.addEventListener('mousedown', function() {
  // Aumenta o padding-bottom quando o select é clicado
  this.style.marginBottom = '100px'; // Altere o valor conforme necessário
  box2.style.marginBottom = '50px'
});

meuSelect1.addEventListener('change', function() {
    // Reseta o padding-bottom quando uma opção é selecionada
    this.style.marginBottom = '20px'; // Valor original do padding-bottom
    box2.style.marginBottom = '0px'
});

meuSelect2.addEventListener('mousedown', function() {
  // Aumenta o padding-bottom quando o select é clicado
  this.style.marginBottom = '90px'; // Altere o valor conforme necessário
  box2.style.marginBottom = '70px'
  box3.style.marginBottom = '20px'
});

meuSelect2.addEventListener('change', function() {
    // Reseta o padding-bottom quando uma opção é selecionada
    this.style.marginBottom = '20px'; // Valor original do padding-bottom
    box2.style.marginBottom = '0px'
    box3.style.marginBottom = '0px'

});
/* CONTROLE DE DADOS */

let valorUser = document.getElementById('input')
let typeUser = document.getElementById('meuSelect1')
let typeConvert = document.getElementById('meuSelect2')
let textRes = document.getElementById('textRes')
let res = document.getElementById('res')
let resultado = undefined
let simbol = undefined
function converter(){
    if(valorUser.value === '' || valorUser.value === 0|| typeUser.value === '' || typeConvert.value === ''){
        textRes.innerText = 'preencha corretamente'
        textRes.style.color = 'red'
        res.innerText = ''
    }
    else{
        if(typeConvert.value == typeUser.value){
            resultado = valorUser.value
        }
        else{
            if(typeUser.value == 'real' && typeConvert.value == 'dolar'){
                resultado = valorUser.value  / 4.93

            }
            else if (typeUser.value == 'real' && typeConvert.value == 'euro'){
                resultado = valorUser.value  / 5.36

            }
            else if(typeUser.value == 'dolar' && typeConvert.value == 'real'){
                resultado = valorUser.value * 4.93

            }
            else if(typeUser.value == 'dolar' && typeConvert.value == 'euro'){
                resultado = valorUser.value * 0.92

            }
            else if(typeUser.value == 'euro' && typeConvert.value == 'real'){
                resultado = valorUser.value * 5.36

            }
            else{
                resultado = valorUser.value * 1.09
            }
        }

        if(typeConvert.value == 'real'){
            simbol = 'R$'
        }
        else if(typeConvert.value == 'dolar'){
            simbol = '$'
        }
        else{
            simbol = '€'
        }
        textRes.innerText = 'Valor convertido:'
        textRes.style.color = 'black'
        res.innerText = simbol + Number(resultado).toFixed(2)
    }

}