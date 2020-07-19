function set(speed) {
    const videoElement = getVideoElement();

    if (speed >= 0 && speed <= 16) {
        videoElement.playbackRate = speed;
    }

    printSpeed(videoElement);
}

function increase() {
    const videoElement = getVideoElement();

    if (videoElement.playbackRate <= 15.75) {
        videoElement.playbackRate = videoElement.playbackRate + 0.25;
    }

    printSpeed(videoElement);
}

function decrease() {
    const videoElement = getVideoElement();

    if (videoElement.playbackRate >= 0.25) {
        videoElement.playbackRate = videoElement.playbackRate - 0.25;
    }

    printSpeed(videoElement);
}

document.onkeydown = (ev) => {
    ev = ev || window.event;

    if (ev.shiftKey) {
        console.log(ev.keyCode);
        switch (ev.keyCode) {
            case 188: decrease();
                return;
            case 190: increase();
                return;
            case 191: set(1);
                return;
            default:
                return;
        }
    }
}

function getVideoElement() {
    const videoNodes = document.getElementsByName("media"),
        videoElement = videoNodes[0];

    if (!videoElement) {
        alert("Video element not found!");
        throw new Error("Video element not found!");
    }

    return videoElement;
}

function printSpeed(videoElement) {
    console.log("Current speed: ", videoElement.playbackRate);
}
