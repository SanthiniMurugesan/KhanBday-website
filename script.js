const cards = document.querySelectorAll(".reveal");
const hearts = document.getElementById("hearts");

let current = 0;

// Show first card
cards[current].classList.add("show");

// Show cards one by one
const reveal = setInterval(() => {

    current++;

    if(current < cards.length){

        cards[current].classList.add("show");

        cards[current].scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    }

    else{

        clearInterval(reveal);

        startCelebration();

    }

},2000);


// Hearts

function startCelebration(){

    createConfetti();

    setInterval(createHeart,400);

}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const emojis=["❤️","💖","💕","💗","🤍"];

    heart.innerHTML=
    emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (18+Math.random()*18)+"px";

    heart.style.animationDuration=
    (5+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },2000);

}


// Confetti

function createConfetti(){

    const emojis=["🎉","🎊","✨","💖","🎂"];

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.fontSize=
        (15+Math.random()*18)+"px";

        confetti.style.animationDuration=
        (3+Math.random()*2)+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },1000);

    }

}
