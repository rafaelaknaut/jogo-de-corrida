//o jogo campo e a cidade é um jogo de corrida que contém 3 jogadores e o objetivo principal e chegar na linha a chegada primeiro ai ganha, os botoes são v b c .

function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;

function draw() {
  if (focused == true) {
    background("#2310CF");
  } else {
    background("rgb(8,28,138)");
  }

  textSize(40);
  text("🤽🏻‍♀️", xJogador1, 100);
  text("🚣🏻‍♀️", xJogador2, 300);
  text("🚣🏻‍♂️", xJogador3, 200,);
  
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 3 venceu!", 10, 100);
    noLoop();
  }
}

function keyReleased() {
  if (key == "v") {
    xJogador1 += random(50);
  }
  if (key == "b") {
    xJogador2 += random(50);
  }
  if (key == "c") {
    xJogador3 += random(50);
  }
}