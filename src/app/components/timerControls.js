'use client'

import styles from "./timerControls.module.css";
import { useState } from "react";

const TimerControls = () => {

    // Set Timer
    const [isRunning, setTimerRunning] = useState([]);

    // Set Timer Text
    const [timerText, setTimerText] = useState([]);

    // Set Hour 
    const [hour, setHour] = useState([]);

    // Set Minute
    const [minute, setMinute] = useState([]);

    // Set Second
    const [second, setSecond] = useState([]);

    const runTimer = () => {

        setTimerRunning(true);
        setTimerText("00:25:00");
        console.log(timerText);
        const timeUnits = String(timerText).split(":");
console.log(timeUnits);
        setHour(Number(timeUnits[0]));
        setMinute(Number(timeUnits[1]));
        setSecond(Number(timeUnits[2]));

        while ((second !== 0 && minute !== 0 && hour !== 0) && isRunning) {
            setInterval(() => {

                if (second !== 0) {
                    setSecond(second - 1);
                    console.log(second);
                }
                else if (minute !== 0) {
                    setMinute(minute - 1);
                    console.log(minute);
                }
                else {
                    setHour(hour - 1);
                    console.log(hour);
                }

                count++;
                console.log("count here - 1");
                setTimerText(`${hour}:${minute}:${second}`);
            });
        }
    };

    return (

        <div className="content">
        <h1> Timer Controls </h1>
        <form>
            <label className={styles.controlLabel}>
                Pomodoro Time: <input className={styles.controlTextBox} type="text" name="timerText" defaultValue="00:25:00" />
            </label>
            <label className={styles.controlLabel}> 
                Short Break Time: <input className={styles.controlTextBox} type="text" defaultValue="00:05:00" />
            </label>  
            <button onClick={runTimer}>Start Pomodoro</button>
        </form>
        </div>
    );
}

export default TimerControls;