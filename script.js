document.getElementById("aydinButton").addEventListener("click", function() {
    const targetDate = new Date("2024-09-27T17:00:00");
    updateTimeUntil(targetDate);
});

document.getElementById("kalpButton").addEventListener("click", function() {
    const targetDate = new Date("2024-09-28T11:00:00");
    updateTimeUntil(targetDate);
});

function updateTimeUntil(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("result").innerText = "Belirtilen tarih geçti.";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("result").innerText = 
        `${days} gün ${hours} saat ${minutes} dakika kaldı.`;
}