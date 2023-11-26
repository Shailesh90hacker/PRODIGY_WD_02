let [msec, sec, min, hrs] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    msec++;
    if (msec == 1000) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hrs++;
            }
        }
    }

    let h = (hrs < 10) ? ("0" + hrs) : (hrs);
    let m = (min < 10) ? ("0" + min) : (min);
    let s = (sec < 10) ? ("0" + sec) : (sec);
    let ms = msec;
    if (msec < 100) {
        if (msec < 10) {
            ms = "00" + msec;
        }
        else {
            ms = "0" + msec;
        }
    }
    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function start() {
    if (timer !== 0) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    [msec, sec, min, hrs] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00:000";
}
