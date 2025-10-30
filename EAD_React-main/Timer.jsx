import React, { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // useEffect to handle the timer
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    // Handlers
    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React Timer</h1>
            <h2>{seconds} s</h2>
            <button onClick={start} style={{ margin: "5px" }}>Start</button>
            <button onClick={pause} style={{ margin: "5px" }}>Pause</button>
            <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
        </div>
    );
}

export default Timer;
