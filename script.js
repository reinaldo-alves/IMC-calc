const button = document.getElementById('button');
const nome = document.getElementById('name');
const peso = document.getElementById('weight');
const altura = document.getElementById('height');
const resultado = document.getElementById('result')

const getText = (imc) => {
    if(imc > 40) return 'com obesidade grau III'
    if(imc > 35) return 'com obesidade grau II'
    if(imc > 30) return 'com obesidade grau I'
    if(imc > 25) return 'levemente acima do peso'
    if(imc > 18.5) return 'no peso ideal'
    return 'abaixo do peso'
}

const imcCalc = () => {
    if(!peso.value || !altura.value || !nome.value) return resultado.textContent = "Preencha todos os campos corretamente"
    const valorIMC = (+peso.value / (+altura.value * +altura.value)).toFixed(1);   //+ serve para transformar string em numero
    resultado.textContent = `${nome.value}, seu IMC é ${valorIMC} e você está ${getText(valorIMC)}`;
}

button.addEventListener('click', imcCalc)