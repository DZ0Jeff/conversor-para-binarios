export default function binario(numero){
    const binarios = []

    function converterParaBinario(numero){
        let resultado = numero / 2
        let resto = numero % 2

        binarios.push(parseInt(resto))

        if (resultado >= 2){
            converterParaBinario(resultado)
        }
    }

    converterParaBinario(numero)
    return binarios
}