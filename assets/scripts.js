var text = "Hi, I'm Yashodha";
var textPosition = 0; 
var speed = 100;

//var tops = document.getElementbyID("top");


function typewriterHello() {
    document.querySelector("#name").innerHTML = text.substring(0, textPosition) + "<span>|</span>";
  
    textPosition += 1

    if(textPosition != text.length){
      setTimeout(typewriterHello, speed);
    }

  }



window.addEventListener("load", typewriterHello);
console.log(window.innerWidth)
console.log(window.innerHeight)





  