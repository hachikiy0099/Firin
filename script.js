const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const toppingImage = document.getElementById("topping"); 
const songTitle = document.getElementById("song-title");
const caption = document.getElementById("caption");

let isPlaying = false;

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
