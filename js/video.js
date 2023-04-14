

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
