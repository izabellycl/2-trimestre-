const caixaPrincipal=document.querySelector(."caixa-principal");
const caixaPerguntas=document.querySelector(."caixa-perguntas");
const caixaAlternativas=document.querySelector(."caixa-alternativas");
const caixaResultado=document.querySelector(."caixa-resultado");
const textoResultado=document.querySelector(."texto-resultado");

const perguntas=[
{
enunciado: "Pergunta1",
  alternativas:[
    {
texto:    "Alternativa1",
afirmação: "afirmação", 
    },
  {
    "Alternativa2",
  ]
}
{
enunciado: "quantas libertadores o palmeiras tem?",
  alternativas:[
    "3",
    "2",
  ]
}
{
enunciado: "verde ou branco?",
  alternativas:[
    "branco",
    "verde",
  ]
}
  {
enunciado: "cortinas são os menores do mundo?!",
  alternativas:[
    "sim",
    "sim",
  ]
}
    {
enunciado: "Abel Ferreira é o melhor do mundo?!",
  alternativas:[
    "sim",
    "com certeza",
  ]
}
      ];

    let atual=0;
      let perguntaAtual;

     funcion mostraPergunta(){
       perguntaAtual=perguntas[atual];
       caixaPerguntas.textosContent=perguntaAtual.enunciado;
       mostraAlternativas();
     }

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas){
const botaoAlternativa = document.createElement("button");
botaoAlternativas.textContent= alternativa;
caixaAlternativas.appendChild(botaoAlternativa);
}
}
    mostraPergunta();
