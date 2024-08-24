document.getElementById("aydinButton").addEventListener("click", function() {
    const targetDate = new Date("2024-09-27T17:00:00");
    startCountdown(targetDate);
});

document.getElementById("kalpButton").addEventListener("click", function() {
    const targetDate = new Date("2024-09-28T11:00:00");
    startCountdown(targetDate);
});

document.getElementById("heartContainer").addEventListener("click", function() {
    window.location.href = "https://youtu.be/BYBGnwwfh9A?si=jQ4JPBIY0auseoN3";
});

function startCountdown(targetDate) {
    clearInterval(window.countdownInterval); // Önceki geri sayımı temizle
    window.countdownInterval = setInterval(function() {
        updateTimeUntil(targetDate);
    }, 1000);
}

function updateTimeUntil(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("result").innerText = "Belirtilen tarih geçti.";
        clearInterval(window.countdownInterval); // Geri sayımı durdur
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("result").innerText = 
        `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye kaldı.`;
}