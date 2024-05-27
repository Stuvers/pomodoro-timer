import { useState } from "react";

function formatTimeUnit(unit) {
    return String(unit).length === 1 ? `0${unit}` : String(unit);
}

const runTimer = (timerText, setTimerText, setTimeoutId) => {   
    const timeUnits = String(timerText).split(":");

    let thisHour = Number(timeUnits[0]);
    let thisMin = Number(timeUnits[1]);
    let thisSec = Number(timeUnits[2]);
    let thisRunning = true;

    setTimeoutId(setInterval(() => {

        if (thisSec === 0) {                
            if (thisMin >= 1) {     
                thisMin = thisMin - 1;
                thisSec = 59;
            }                
        }
        else
        {
            thisSec = thisSec - 1;
        }

        if (thisMin === 0)
        {
            if (thisHour >= 1) {
                thisHour = thisHour - 1;
                thisMin = 59;
            }                    
        }              
        
        if (thisSec === 0 && thisMin === 0 && thisHour === 0) {                
            clearInterval();
        }

        setTimerText(`${formatTimeUnit(thisHour)}:${formatTimeUnit(thisMin)}:${formatTimeUnit(thisSec)}`);            
    }, 1000, thisSec, thisMin, thisHour, setTimerText));

    thisRunning = false;
};

const TimerControls = (props) => {             

    const [timeoutId, setTimeoutId] = useState(0);

    return (
        <>
        <button onClick={() => runTimer(props.timerText, props.setTimerText, setTimeoutId) }>
            Start Pomodoro
        </button>
        <button onClick={() => { clearInterval(timeoutId); console.log(timeoutId); } }>
            Pause Pomodoro
        </button>
        </>
    );
}

export default TimerControls;