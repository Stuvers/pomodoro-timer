// var timerPromise = 

async function TimerRunning(endMinTime) {
    let endSecTime = endMinTime * 60;

    var timerVal = setInterval(() => {
        return endSecTime - 1;
    }, 1000);
    // while (timeRunning < endSecTime) {
    //     d = new Date();
    //     seconds = d.getSeconds();
    //     difference = endSecTime - timeRunning;

    //     document.getElementById("client-timer").innerHTML = endSecTime - timeRunning;
    // }
}

const Timer = (endMinTime) => {
    let result = TimerRunning(endMinTime);
    return (
        <div id="client-timer">
            {timerVal}
        </div>
        );
}

export default Timer;