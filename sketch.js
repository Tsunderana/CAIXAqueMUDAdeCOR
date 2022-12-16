var caixa;
var fundo;
function setup() {
  createCanvas(400,400);
  fundo = createSprite(200,200,400,400);
  fundo.shapeColor = "purple";
  createCanvas(400,400);
  caixa = createSprite(200,200,30,30);
  caixa.shapeColor = "orange";
 
}

// createSprite - cria um corpo do objeto, o sprite
// shapeColor - muda a cor do sprite
// createCanvas /createEdgesSprites - cria as bordas da tela
// function - define algum tipo de comando
// if(objeto tananam){isso acontece}
// else{} - se oq ta previsto no if não acontecer
// comentários pro programador, computador não lê
// var antecede o sprite e como o nome diz, é uma variável, algo a ser moldável
// background - plano de fundo
// function draw - sempre se repete, vc coloca coisas como o DRAWSPRITES (que desenha os sprites na tela)
// velocityX ou velocityY define a velocidade do sprite
// .position.x ou .position.y define a posição na tela e geralmente é usado pra acrescentar a posição, tipo velocity,. ex: ball.position.x + 5
// index = é o campo onde vc define as pastas que o computador deve ler
//sketch.js = onde vc faz o código mais grosso
//p5 = as bibliotecas do sistema




function draw() 
{
  background(30);

  if(keyDown("right")){
    caixa.shapeColor = "black";
    caixa.position.x = caixa.position.x+5;
    fundo.shapeColor = "yellow";
  }
  if(keyDown("left")){
    caixa.shapeColor = "yellow";
    caixa.position.x = caixa.position.x-5;
    fundo.shapeColor = "black";
  }
  if(keyDown("up")){
    caixa.shapeColor = "purple";
    caixa.position.y = caixa.position.y-5;
    fundo.shapeColor = "orange";
  }
  if(keyDown("down")){
    caixa.shapeColor = "white";
    caixa.position.y = caixa.position.y+5;
    fundo.shapeColor = "blue";
  }
  
  drawSprites();
}
 



