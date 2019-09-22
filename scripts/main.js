let icono  = document.getElementById("icon");
let link = document.getElementById("enlace");
let abrir = document.getElementById("open");
let close = false;
let botones = document.getElementsByClassName("menu-item");

function Icon(){
    let positon = window.pageYOffset;
    if(positon > 560 && positon < 1080){   
        icono.style.background = "rgba(250, 169, 6,.8)";
        icono.style.transition = '1s'
    }else if(positon > 1079 && positon < 2280){
        icono.style.background = "rgba(112,60,0,.8)";
        icono.style.transition = '1s';
    }if(positon <= 560 || positon > 2280){
        icono.style.background = "rgba(88, 214, 141,.6)";
        icono.style.transition = '1s';
    }
}

function apertura(){
    if(close){
        link.style.width = '90vw';
        close = false;
        icono.style.opacity = '0';
    }else{
        link.style.width = '0';
        link.style.overflow = 'hidden';
        close = true;
        icono.style.opacity = '100';
    }
}



icono.addEventListener('click', function(){
    apertura();
});


window.addEventListener('scroll',function(){
  Icon();
});

window.addEventListener('load', function(){
    if(this.screen.width <= 840){
        apertura();
    }
    Icon();
});

window.addEventListener('resize', function(){
    Icono();
});

