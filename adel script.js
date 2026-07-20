function openGift(){

document.getElementById("gift").style.display="block";

document.getElementById("gift").scrollIntoView({
behavior:"smooth"
});

createConfetti();

}

function createConfetti(){

for(let i=0;i<80;i++){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-30px";
heart.style.fontSize=(18+Math.random()*20)+"px";
heart.style.animation="fall 4s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

}

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{

0%{
transform:translateY(-20px) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}

}
`;

document.head.appendChild(style);
