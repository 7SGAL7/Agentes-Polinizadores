let link = document.getElementById("enlace");
let abrir = document.getElementById("open");
let close = false;
let botones = document.getElementsByClassName("menu-item");
let icono  = document.getElementById("icon");

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



window.addEventListener('load', function(){
    if(this.screen.width <= 840){
        apertura();
    }
});
