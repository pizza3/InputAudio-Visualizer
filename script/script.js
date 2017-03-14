var nav = document.getElementById('nav');
var burger = document.getElementById('burger');
var up = document.getElementById('up');
var mid = document.getElementById('mid');
var down = document.getElementById('down');
var opennav=false;


function openNav(){
  if(opennav==false){
    nav.className+= ' nav1';
    nav.classList.remove('nav2');
    up.className+=' a1';
    mid.style.width= '0px';
    down.className+=' a3';
    opennav=true;
  }
  else {
    nav.className+= ' nav2';
    nav.classList.remove('nav1');
    up.classList.remove('a1');
    mid.style.width= '40px';
    down.classList.remove('a3');
    opennav=false;
  }
}

function boxNav(a,Url) {
  nav.className+= ' nav2';
  nav.classList.remove('nav1');
  opennav=false;
  setTimeout(function(){window.location = Url; }, 600);
}
