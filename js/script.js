const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{

    mario.classList.remove('jump');  

    },700);
}
const loop = setInterval(()=> {

console.log("loop")

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");
     

    if(pipePosition<= 110 && pipePosition > 0 && marioPosition < 80 ){
        
        pipe.style.animation="none";
        pipe.style.left=`${pipePosition}px`

        mario.style.animation="none";
        mario.style.bottom=`${marioPosition}px`

        clouds.style.animation="none";
        clouds.style.left=`${cloudsPosition}px`

        mario.src = "./imagens/game-over.png";
        mario.style.width = "75px"
        mario.style.height = "100px"
        mario.style.marginLeft = "35px"
        

        clearInterval(loop);
    }
 
},10) 
 
document.addEventListener("keypress",jump)