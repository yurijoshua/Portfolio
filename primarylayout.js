function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}

const titulo = document.querySelector('.transicao-frase.title');
const content = document.querySelector('.transicao-frase.content');

typeWrite(titulo);

setTimeout(function(){
    content.setAttribute("style",  "visibility: visible;")
    typeWrite(content);
}, 4000)


//Declarando obj classe
var myicon = document.getElementsByClassName("whatapp-link")[1];
var mybalao = document.getElementsByClassName("balao2")[0];

// Quando usar o scroll acionará a função
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > document.getElementById("header").offsetHeight || document.documentElement.scrollTop > document.getElementById("header").offsetHeight ) {
    myicon.style.visibility = "visible";
    mybalao.style.visibility = "visible";
  } else {
    myicon.style.visibility = "hidden";
    mybalao.style.visibility = "hidden";
  }
}



