"use strict";

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
    console.log("menu ouvert");
}
let bt=document.querySelector('button');
console.log(bt);

let interrupteur=0;
function backgroundC(){
    let body=document.querySelector('body');
    if  (interrupteur==0){
        body.style.background='darkslategrey';
        interrupteur=1;
        body.style.color='white';
    }else{
        body.style.background='#5dafaf';
        body.style.color='black';
        interrupteur=0;
    
    }
}
bt.addEventListener("click",backgroundC);