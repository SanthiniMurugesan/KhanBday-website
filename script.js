const cards = document.querySelectorAll(".reveal");
const hearts = document.getElementById("hearts");

let current = 0;

showCard(current);

function showCard(index) {
    const card = cards[index];

    card.classList.add("show");

    card.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    typeCard(card, () => {
        if (index + 1 < cards.length) {
            setTimeout(() => {
                showCard(index + 1);
            }, 1000);
        } else {
            startCelebration();
        }
    });
}

function typeCard(card, callback) {

    const elements = card.querySelectorAll("h1, h2, p");

    let currentElement = 0;

    function typeNextElement() {

        if (currentElement >= elements.length) {
            callback();
            return;
        }

        const el = elements[currentElement];
        const text = el.textContent;

        el.textContent = "";

        let i = 0;

        function typeLetter() {

            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(typeLetter, 40);
            } else {
                currentElement++;
                setTimeout(typeNextElement, 300);
            }

        }

        typeLetter();
    }

    typeNextElement();
}

// Hearts

function startCelebration() {

    createConfetti();

    setInterval(createHeart, 400);

}

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const emojis = ["❤️", "💖", "💕", "💗", "🤍"];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

}

function createConfetti() {

    const emojis = ["🎉", "🎊", "✨", "💖", "🎂"];

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.fontSize = (15 + Math.random() * 18) + "px";

        confetti.style.animationDuration = (3 + Math.random() * 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}
