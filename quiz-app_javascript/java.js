     // Treino de Javascript imcompleto

    //seleciona elemento
    var mudar = document.querySelector("#mudar_cor");
    
    
    
    //adiciona o estilo
    mudar.style.backgroundColor = "blue";

    //adiconar vários estilos
    var mudar2 = document.querySelector(".mudar_2");
    mudar2.style.cssText = "color: green;background-color: blue; font-size: 30px" ;

    window.onload = function(){
        console.log("Carregou o DOM");
    }
    console.log("Carregou o JS");
    const btn = document.querySelector("#btn");
    function sayHello(){
        console.log("Hello");
    }
    function sayWorld(){
        console.log("World");
    }

    // Abordagem 1
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayWorld)

    // Abordagem 2
    const btn2 = document.querySelector("#btn-1")

    btn2.addEventListener("click",()=>{
        sayHello();
        sayWorld();
    })