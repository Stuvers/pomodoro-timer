'use client'

import TimerControls from "./timerControls";
import { useState } from "react";
import styles from "./timerDisplay.module.css";

const TimerDisplay = () => {
     
    const [timerText, setTimerText] = useState("00:25:00");

    const handleUserInputChange = (e) => {
        console.log("OnChange:" + e.target.value);
        setTimerText(e.target.value);
    }

    return (

        <div className="content">
        <h1> Timer Controls </h1>
        <form>
            <label className={styles.controlLabel}>
                Pomodoro Time: <input className={styles.controlTextBox} type="text" name="timerText" value={timerText} onChange={handleUserInputChange} />
            </label>
            <label className={styles.controlLabel}> 
                Short Break Time: <input className={styles.controlTextBox} type="text" defaultValue="00:05:00" />
            </label>  
            <TimerControls timerText={timerText} setTimerText={setTimerText} />
        </form>
        </div>
    );
}

export default TimerDisplay;