const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const toppingImage = document.getElementById("topping"); 
const songTitle = document.getElementById("song-title");
const caption = document.getElementById("caption");

let isPlaying = false;
const toppings = Array.from(document.querySelectorAll(".topping"));
let currentIndex = -1;


// Klik tombol play
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playBtn.src = "Play.png";
    } else {
        audio.play();
        isPlaying = true;
        playBtn.src = "Pause.png";
    }
});

// Fungsi klik topping
document.querySelectorAll(".topping").forEach((el) => {
    el.addEventListener("click", () => {
        const newImage = el.getAttribute("data-img");
        const newMusic = el.getAttribute("data-music");
        const newTitle = el.getAttribute("data-title");

        toppingImage.src = newImage;
        audio.src = newMusic;
        audio.play().then(() => {
            isPlaying = true;
            playBtn.src = "Pause.png";
        }).catch(err => {
            console.error("Autoplay failed:", err);
            caption.textContent = "Klik tombol play untuk mulai lagu.";
        });

        songTitle.textContent = newTitle;
        caption.textContent = `Sekarang kamu memilih topping: ${newTitle}`;
    });
});

toppings.forEach((el, index) => {
    el.addEventListener("click", () => {
        currentIndex = index;
        playTopping(currentIndex);
    });
});

function playTopping(index) {
    const el = toppings[index];
    if (!el) return;

    const newImage = el.getAttribute("data-img");
    const newMusic = el.getAttribute("data-music");
    const newTitle = el.getAttribute("data-title");

    toppingImage.src = newImage;
    audio.src = newMusic;
    audio.play().then(() => {
        isPlaying = true;
        playBtn.src = "Pause.png";
    }).catch(err => {
        console.error("Autoplay failed:", err);
        caption.textContent = "Klik tombol play untuk mulai lagu.";
    });

    songTitle.textContent = newTitle;
    caption.textContent = `Sekarang kamu memilih topping: ${newTitle}`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex === -1) return;
    currentIndex = (currentIndex + 1) % toppings.length;
    playTopping(currentIndex);
});

prevBtn.addEventListener("click", () => {
    if (currentIndex === -1) return;
    currentIndex = (currentIndex - 1 + toppings.length) % toppings.length;
    playTopping(currentIndex);
});
