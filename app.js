let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}) //rate é a velocidade da voz!
}

//usar esta função quando for reiniciar o jogo
function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//dar uma função pro botão 'chutar' na linha 27 no HTML
//função é determina que a variavel tem uma responsabilidade 

function verificarChute() {
    //vamos atribuir o seu chute(input) na variavel chute
    let chute = document.querySelector('input').value; //o value é utilziado quando é input

    if (chute == numeroSecreto){
        exibirTexto('h1', 'acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`; 

        exibirTexto('p', mensagemTentativas);

        //preciso que o botão "novo jogo" esteja habilitado quando eu acertar o número. Ele está desativado no HTML então é preciso remover isso.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        limparCampo();
        if (chute > numeroSecreto){
            exibirTexto('p', 'o número secreto é menor');
        } else {
            exibirTexto('p', 'o número secreto é maior');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
     return parseInt(Math.random() * 10 + 1); //vai mandar esse valor lá para a variavel numeroSecreto
}

//função para limpar o campo de texto
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
//função para reiniciar jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}