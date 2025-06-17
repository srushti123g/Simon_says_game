let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();

    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");

            
        },250);}

function levelup(){
    userseq=[];
    level++;
  
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    console.log(randcolor);
    console.log(randIdx);
    console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
   
}
function checkAns(idx){
   
   
    if(userseq[idx]==gameseq[idx]){
        console.log("same value");
        if(userseq.length==gameseq.length){
           setTimeout( levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function buttonPress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonPress)
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}