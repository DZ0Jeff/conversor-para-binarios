import binario from './bin.js'

const entrada = document.querySelector('input.entrada')
const saida = document.querySelector('div .resultado')

let time = null

function gerenciarEntrada(){
    clearTimeout(time)

    time = setTimeout(() => {
        if(Number.isInteger(parseInt(entrada.value))){
            let resultado = binario(entrada.value)
            saida.innerHTML = resultado.join(' ')
        } else {
            saida.innerHTML = "insira um número..."
        }
        
    },1000)
}

entrada.addEventListener('keyup', e => {
    gerenciarEntrada()
})