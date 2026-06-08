function openSurprise() {

    // Play music
    const song = document.getElementById("birthdaySong");
    song.play();

    // Show hearts
    document.getElementById("heartsContainer").classList.add("show");

    // Scroll to message
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });
}