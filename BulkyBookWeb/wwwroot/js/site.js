// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", () => {
    const mainVideo = document.getElementById("main-video");
    const loopingVideo = document.getElementById("looping-video");
    const choicesOverlay = document.querySelector(".choices-overlay");

    mainVideo.onended = () => {
        mainVideo.style.display = "none";

        loopingVideo.style.display = "block";
        loopingVideo.play();

        choicesOverlay.style.display = "flex";
    };
});

function choosePath(choice) {
    if (choice === 'choice1') {
        window.location.href = '/Home/Choice1';
    } else if (choice === 'choice2') {
        window.location.href = '/Home/Choice2';
    } else {
        window.location.href = '/Home'; 
    }
}
