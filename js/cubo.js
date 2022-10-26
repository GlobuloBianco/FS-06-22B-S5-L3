//---Tasti Arrow---//
const rightBtn = document.querySelector('.right-arrow');
const leftBtn = document.querySelector('.left-arrow');
var deg = 0;

rotateCube = (cubeHTML, pos) => {
    document.querySelector(cubeHTML).style.transform = `rotateY(${pos}deg)`;
}

rotateRight = () => {
    let degR = deg += 90;
    rotateCube('.cube-1', degR);
    rotateCube('.cube-2', degR);
    rotateCube('.cube-3', degR);
}

rotateLeft = () => {
    let degL = deg += -90;
    rotateCube('.cube-1', degL);
    rotateCube('.cube-2', degL);
    rotateCube('.cube-3', degL);
}

//---Tasto Play---//
const playPauseBtn = document.querySelector('.play-pause');

changePlayPause = () => {
    const playIcon = document.querySelector('.play-pause i');
    const playIconClass = playIcon.classList[1];

    let togglePlay = (play, pause) => {
        playIcon.classList.remove(play);
        playIcon.classList.add(pause);
    }

    if (playIconClass === 'fa-play') {
        togglePlay('fa-play', 'fa-pause');
        play = setInterval(function(){
            rotateRight();
        },1500);
    } else {
        togglePlay('fa-pause', 'fa-play');
        clearInterval(play);
    }
}
// Click Freccia
rightBtn.addEventListener('click', rotateRight);
leftBtn.addEventListener('click', rotateLeft);
// Click Play
playPauseBtn.addEventListener('click', changePlayPause);