const displayTime = function () {
    let time = new Date();
    let getHours = time.getHours();
    let getMinutes = time.getMinutes();
    let getSeconds = time.getSeconds();

    document.getElementById("hours").innerHTML = getHours;
    document.getElementById("minutes").innerHTML = getMinutes;
    document.getElementById("seconds").innerHTML = getSeconds;
    // console.log(getHours, getMinutes, getSeconds);

    if (getSeconds <= 9) {
        document.getElementById("seconds").innerHTML = "0" + getSeconds;
    }
    if (getHours <= 9) {
        document.getElementById("hours").innerHTML = "0" + getHours;
    }
    if (getMinutes <= 9) {
        document.getElementById("minutes").innerHTML = "0" + getMinutes;
    }

    if (getHours >= 12) {
        document.getElementById("session").innerHTML = "PM"
    }
}

setInterval(displayTime, 100)