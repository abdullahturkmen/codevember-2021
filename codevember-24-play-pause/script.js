let button = document.getElementsByClassName('button')[0];

function play() {
    button.style.transform = "rotateX(10deg) rotateY(100deg)";
}

function pause() {
    button.style.transform = "rotateX(10deg) rotateY(10deg)";
}
