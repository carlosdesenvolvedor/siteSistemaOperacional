

let video = document.getElementsByClassName("video-screen")[0];
function play(){
    video.play();
}
var temp = 0;
function tempo(temp){
    video.play();
    video.currentTime = temp;
    
    
}
function pause(){
    video.pause();
}
/* Testar essa função para parar o video*/
/*Esse codígo manda mensagem de tem po em tempo*/
/*
setTimeout(function() {
    alert("acabou o tempo")
}, 5000);
*/
var f = 0;
function prog(temp,f){
    video.play();
    video.currentTime = temp;
            setTimeout(function() {
            video.currentTime = 6540;
            var conf = confirm("Assitir essa parte novamente?", true);
            if(conf == true){
                
                prog(temp,f);
            }
            else{
                /*var prox = confirm("voltar para proximo slid",true);*/
                video.currentTime = 6540;
                if(prox == true){
                  /*  alert("indo para proximo slid");
                    window.scroll(1500,6500)
                    
                */
                }
                else{
                  /*  alert("sair");*/
                }
            }
    
        }, f);
    
}



(function duracao() {
    var obj = document.getElementById("video-screen");
    console.log(obj.currentTime, obj.duration, obj.ended);
})(2000);

/*
// Variável global para armazenar o objeto do player do YouTube
var player;

// Função para inicializar o player do YouTube
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '100%',
    videoId: 'KIxPinooy9M',
    playerVars: {
      start: 12, // Define o tempo de início em segundos (neste exemplo, 12 segundos)
      controls: 1, // Mostra os controles do player
    },
    events: {
      'onReady': onPlayerReady,
    },
  });
}

// Função chamada quando o player do YouTube estiver pronto
function onPlayerReady(event) {
  // Você pode adicionar ações adicionais aqui, se necessário
}

// Função para pular para um momento específico no vídeo
function pularParaTrecho(tempo) {
  if (player) {
    player.seekTo(tempo);
  }
}*/

// Variável global para armazenar o objeto do player do YouTube
var player;

// Função para inicializar o player do YouTube
// Função para inicializar o player do YouTube
function inicializarPlayer(idDoVideo, tempoDeInicio, elementoPlayer) {
    player = new YT.Player(elementoPlayer, {
      height: '360',
      width: '100%',
      videoId: idDoVideo, // ID do vídeo passado como parâmetro
      playerVars: {
        start: tempoDeInicio, // Tempo de início passado como parâmetro (em segundos)
        controls: 1, // Mostra os controles do player
      },
      events: {
        'onReady': onPlayerReady,
      },
    });
  }
  

// Função chamada quando o player do YouTube estiver pronto
function onPlayerReady(event) {
  // Você pode adicionar ações adicionais aqui, se necessário
}

