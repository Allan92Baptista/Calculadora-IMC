/*var nome = window.prompt('Qual seu nome?')
window.alert('Bem Vindo, ' + nome + '!')*/

function calcular(){
    var altura = window.document.getElementById('calc1')
    var peso = window.document.getElementById('calc2')
    var res = window.document.getElementById('res')
    var alt = Number(altura.value)
    var pes = Number(peso.value)
    var cal  = pes / (alt * alt) 
    var msg = ''

    if(cal <= 18.5){

        msg = 'Abaixo do Peso (Desnutrição)'
    }

    else if(cal >= 18.6 && cal <= 24.9){

        msg = 'Peso Normal'
    }

    else if(cal >= 25.0 && cal <= 29.9){

        msg = 'Sobrepeso'
    }

    else if(cal >= 30.0 && cal <= 34.9){

        msg = 'Obesidade Grau I'
    }

    else if(cal >= 35.0 && cal <= 39.9){
        
        msg = 'Obesidade Grau II (Severa)'
    }

    else if(cal >= 40.0){

        msg = 'Obesidade Grau III (Morbida)'
    }

    else{
        msg =  ''
    }

    res.innerHTML = `Seu IMC é ${cal.toFixed(1)} Kg/m² - ${ msg }`
}


function limpar(){
    var res = window.document.getElementById('res')
    var limpar = '<strong><b> Resultado </b></strong>'
    res.innerHTML = `${limpar}`
}


