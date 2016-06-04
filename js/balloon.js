var balloonsContainer = document.getElementById("balloons-container"),
    balloons = balloonsContainer.childNodes,
    introTitle = document.getElementById('intro-title'),
    introSub = document.getElementById('intro-sub'),
    introBut = document.getElementById('intro-button');
    b_pink =document.getElementById('b_pink');
    b_orange =document.getElementById('b_orange');
    b_blue =document.getElementById('b_blue');
    b_yellow =document.getElementById('b_yellow');
    b_purple =document.getElementById('b_purple');
    b_green =document.getElementById('b_green');
    b_cyan =document.getElementById('b_cyan');
    b_red =document.getElementById('b_red');


for (var i = 0; i < balloons.length; i++) {
    var balloon = balloons[i];
    balloon.addEventListener('click', pop, false);
}     

function pop(e) {
    var element = e.target;
    if (element.classList.contains('yellow')) {
        document.body.style.background = 'url(img/bg/bg1.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
          b_yellow.style.background = 'transparent';
          setTimeout(function(){ b_yellow.style.background = '-webkit-linear-gradient( yellow 90%, white 100%)'; }, 4000);
        introBut.className = "button-yellow";
        if (introTitle.style.color !== 'rgb(51,51,51)') {
             introTitle.style.color = 'rgb(51,51,51)';
             introSub.style.color   = 'rgba(51,51,51,.8)';
        }
    }
    else if (element.classList.contains('blue')) {
         document.body.style.background = 'url(img/bg/bg2.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
           b_blue.style.background = 'transparent';
          setTimeout(function(){ b_blue.style.background = '-webkit-linear-gradient( blue 90%, white 100%)'; }, 4000);
        introBut.className = "button-blue";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color   = 'rgba(255,255,255,.8)';
        }
    }
     else if (element.classList.contains('purple')) {
      b_purple.style.background = 'transparent';
          document.body.style.background = 'url(img/bg/bg3.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
           
          setTimeout(function(){ b_purple.style.background = '-webkit-linear-gradient( purple 90%, white 100%)'; }, 4000);
         introBut.className = "button-purple";
         if (introTitle.style.color !== 'rgb(255,255,255)') {
             introTitle.style.color = 'rgb(255,255,255)';
             introSub.style.color   = 'rgba(255,255,255,.8)';
         }
    }
      else if (element.classList.contains('red')) {
          document.body.style.background = 'url(img/bg/bg4.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
           b_red.style.background = 'transparent';
          setTimeout(function(){ b_red.style.background = '-webkit-linear-gradient(red 90%, white 100%)'; }, 4000);
          introBut.className = "button-red";
          if (introTitle.style.color !== 'rgb(255,255,255)') {
              introTitle.style.color = 'rgb(255,255,255)';
              introSub.style.color   = 'rgba(255,255,255,.8)';
         }    
    }
      else if (element.classList.contains('cyan')) {
           document.body.style.background = 'url(img/bg/bg5.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
           b_cyan.style.background = 'transparent';
          setTimeout(function(){ b_cyan.style.background = '-webkit-linear-gradient(cyan 90%, white 100%)'; }, 4000);
          introBut.className = "button-cyan";
          if (introTitle.style.color !== 'rgb(255,255,255)') {
              introTitle.style.color = 'rgb(255,255,255)';
              introSub.style.color   = 'rgba(255,255,255,.8)';
         }
    }
      else if (element.classList.contains('pink')) {
          document.body.style.background = 'url(img/bg/bg6.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
          b_pink.style.background = 'transparent';
          setTimeout(function(){ b_pink.style.background = '-webkit-linear-gradient(pink 90%, white 100%)'; }, 4000);
          introBut.className = "button-pink";
          if (introTitle.style.color !== 'rgb(255,255,255)') {
              introTitle.style.color = 'rgb(255,255,255)';
              introSub.style.color   = 'rgba(255,255,255,.8)';
          }
    }
      else if (element.classList.contains('green')) {
          document.body.style.background = 'url(img/bg/bg7.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
           b_green.style.background = 'transparent';
          setTimeout(function(){ b_green.style.background = '-webkit-linear-gradient(green 90%, white 100%)'; }, 4000);

          introBut.className = "button-green";
          if (introTitle.style.color !== 'rgb(255,255,255)') {
              introTitle.style.color = 'rgb(255,255,255)';
              introSub.style.color   = 'rgba(255,255,255,.8)';
         }
    }
      else if (element.classList.contains('orange')) {
           document.body.style.background = 'url(img/bg/bg8.jpg) center center no-repeat ';
          document.body.style.backgroundSize = 'cover';
           b_orange.style.background = 'transparent';
          setTimeout(function(){ b_orange.style.background = '-webkit-linear-gradient(orange 90%, white 100%)'; }, 4000);
          if (introTitle.style.color !== 'rgb(255,255,255)') {
              introTitle.style.color = 'rgb(255,255,255)';
              introSub.style.color   = 'rgba(255,255,255,.8)';
          }
    }   
    element.style.display = "none";
    e.preventDefault();
    e.stopPropagation();
}