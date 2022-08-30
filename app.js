// document.querySelector('button').addEventListener('click',(evt)=>{console.log(evt)});

// const inpt=document.querySelector('input');
// inpt.addEventListener('keyup',function(evt){
//     console.log(evt.key);
//     console.log(evt.code);
// })
// inpt.addEventListener('keydown',function(){console.log("keydown")})
var clr="black";

let ct=0;
    for(let i=1;i<=25;i++){
        let r=document.createElement('div');
        document.getElementById('board').appendChild(r)
        for(let j=1;j<=60;j++){
            let pix=document.createElement('span');
            pix.addEventListener('dragenter',()=>{pix.style.backgroundColor=clr})
            // pix.innerText=ct
            document.querySelectorAll('div')[i-1].appendChild(pix);
            
            ct+=1;
        }
        
    }
alert("Press 'r' ----> red\n'g' ----> green\n'b' ----> blue\n'v' ----> violet\n'p' ----> pink\n'o' ----> orange")
var currentpt=[12,30];
let moveup=function(){
    currentpt[0]=currentpt[0]-1;
    colorup(getpix(currentpt));
}
let movedown=function(){
    currentpt[0]=currentpt[0]+1;
    colorup(getpix(currentpt));
}
let moveleft=function(){
    currentpt[1]=currentpt[1]-1;
    colorup(getpix(currentpt));
}
let moveright=function(){
    currentpt[1]=currentpt[1]+1;
    colorup(getpix(currentpt));
}

const startpt=[0,0];
const pixel=document.querySelectorAll('span');
const getpix=(li)=>{
    let n=li[0]*60+li[1];
    return n;
}

const colorup=function(n){
    pixel[n].style.backgroundColor=clr;
}
window.addEventListener('keydown',(evt)=>{
    if(evt.code=="KeyR"){clr="red"}
    else if(evt.code=="KeyB"){clr="blue"}
    else if(evt.code=="KeyG"){clr="green"}
    else if(evt.code=="KeyO"){clr="orange"}
    else if(evt.code=="KeyP"){clr="pink"}
    else if(evt.code=="KeyV"){clr="violet"}
    else if(evt.code=="Space"){clr="black"}


})
window.addEventListener('keydown',function(evt){
    if(evt.code=="ArrowUp"){
        moveup();
    }else
    if(evt.code=="ArrowDown"){
        movedown();
    }
    if(evt.code=="ArrowLeft"){
        moveleft();
    }
    if(evt.code=="ArrowRight"){
        moveright();
    }
})

