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
    } else if (choice === 'choice3') {
        window.location.href = '/Home/Choice3';
    } else if (choice === 'choice4') {
        window.location.href = '/Home/Choice4';
    } else if (choice === 'choice5') {
        window.location.href = '/Home/Choice5';
    } else if (choice === 'choice6') {
        window.location.href = '/Home/Choice6';
    } else if (choice === 'choice7') {
        window.location.href = '/Home/Choice7';
    } else if (choice === 'choice8') {
        window.location.href = '/Home/Choice8';
    } else if (choice === 'choice9') {
        window.location.href = '/Home/Choice9';
    } else if (choice === 'choice10') {
        window.location.href = '/Home/Choice10';
    } else if (choice === 'choice11') {
        window.location.href = '/Home/Choice11';
    } else {
        window.location.href = '/Home'; 
    }
}
