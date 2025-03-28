document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Example: Alert when a video is played
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.addEventListener("play", () => {
            console.log("Video Started: " + video.currentSrc);
        });
    });
});
