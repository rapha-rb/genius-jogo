let order = [];
let clickedOrder = [];
let score = 0;

//0-verde
//1-vermelho
//2-amarelo
//3-azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//CRIA ORDEM ALEATÓRIA
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};

//ACENDE A PROXIMA COR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });
};

//CHECA SE OS BOTOES CLIACDOS SAO OS MESMOS DA ORDEM DO JOGO
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
};

//FUNÇÃO PARA CLIQUE DO USUÁRIO
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 250);
};

//FUNÇÃO QUE RETORNA A COR
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
};

//FUNÇÃO PARA PROXIMO NIVEL DO JOGO
let nextLevel = () => {
    score++;
    shuffleOrder();
};

//FUNÇÃO PARA GAME OVER
let gameOver = () => {
    alert(
        `Pontuação: ${score}!\nVocê perdeu!\nClique em OK para iniciar novamente.`
    );
    order = [];
    clickedOrder = [];

    playGame();
};

//FUNÇÃO DE INICIO DO JOGO
let playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando novo jogo!`);
    score = 0;

    nextLevel();
};

//EVENTOS DE CLIQUE PARA AS CORES
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//INICIO DO JOGO
playGame();
