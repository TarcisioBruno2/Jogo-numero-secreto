//lista de numeros sorteados
let listaDeNumerosSorteados = [];
let NumeroLimite = 500;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1

//atribuindo tag e texto!
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// ultilizando teg e texto
function exibirMensagenInicial(){
exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p',`Escolha um número entre 1 e ${NumeroLimite}!`);
}

exibirMensagenInicial()

// atribuindo função e logica do jogo
function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto e menor');
            exibirTextoNaTela('h1','Tente novamente');
        } else {
            exibirTextoNaTela('p','O número secretoe maior');
            exibirTextoNaTela('h1','Tente novamente');
        }
        tentativas++;
        limparCampo();
    }
}
//gerando numero pseudoaleatorio
function gerarUmNumeroAleatorio() {
    let numeroEscolhido =parseInt(Math.random() *NumeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
//colocando limite de numeros sorteados
    if (quantidadeDeElementosNaLista == NumeroLimite){
        listaDeNumerosSorteados = [];
    }
    //verificando se tem o mesmo numero sorteado na lista para não repetir 
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarUmNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//reiniciar o jogo
function reiniciarJogo(){
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}