import React, { useState, useEffect, useRef } from 'react';
import './TimerSection.css';

const TimerCard = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const startTimer = () => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            return;
        }

        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            const currentSeconds = seconds - 1;
            if (currentSeconds < 0) {
                currentSeconds = 59;
                setMinutes(minutes - 1);
            }
            setSeconds(currentSeconds);
        }, 1000);
    };

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const resetTimer = () => {
        stopTimer();
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    const playTune = () => {
        // Code to play the tune when the timer ends
        // You can use the Audio API or any library for audio playback
        // Example: const audio = new Audio('/path/to/tune.mp3');
        //          audio.play();
    };

    const handleHourChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setHours(value);
        }
        else {
            setHours(0);
        }
    };

    const handleMinuteChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setMinutes(value);
        }
        else {
            setMinutes(0);
        }
    };

    const handleSecondChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setSeconds(value);
        }
        else {
            setSeconds(0);
        }
    };

    const handleIncrement = (field) => {
        if (field === 'hours') {
            setHours((prevHours) => prevHours + 1);
        } else if (field === 'minutes') {
            setMinutes((prevMinutes) => prevMinutes + 1);
        } else if (field === 'seconds') {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }
    };

    const handleDecrement = (field) => {
        if (field === 'hours') {
            setHours((prevHours) => Math.max(prevHours - 1, 0));
        } else if (field === 'minutes') {
            setMinutes((prevMinutes) => Math.max(prevMinutes - 1, 0));
        } else if (field === 'seconds') {
            setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0));
        }
    };

    return (
        <div className="timer-card">
            <div className="timer-card-body">
                <div className="timer-input">
                    <div>
                        <p>Hours</p>
                        <p className='up_ward' onClick={() => handleIncrement('hours')}>
                            <i className="fas fa-caret-up fa-lg"></i>
                        </p>
                        <input type="number" value={hours} onChange={handleHourChange} />
                        <p className='down_ward' onClick={() => handleDecrement('hours')}>
                            <i className="fas fa-caret-down fa-lg"></i>
                        </p>
                    </div>
                    <div>
                        <p>Minutes</p>
                        <p className='up_ward' onClick={() => handleIncrement('minutes')}>
                            <i className="fas fa-caret-up fa-lg"></i>
                        </p>
                        <input type="number" value={minutes} onChange={handleMinuteChange} />
                        <p className='down_ward' onClick={() => handleDecrement('minutes')}>
                            <i className="fas fa-caret-down fa-lg"></i>
                        </p>
                    </div>
                    <div>
                        <p>Seconds</p>
                        <p className='up_ward' onClick={() => handleIncrement('seconds')}>
                            <i className="fas fa-caret-up fa-lg"></i>
                        </p>
                        <input type="number" value={seconds} onChange={handleSecondChange} />
                        <p className='down_ward' onClick={() => handleDecrement('seconds')}>
                            <i className="fas fa-caret-down fa-lg"></i>
                        </p>
                    </div>
                </div>
                <div className="timer-buttons">
                    {!isRunning && (
                        <button onClick={startTimer}>Start</button>
                    )}
                    {isRunning && (
                        <button onClick={stopTimer}>Stop</button>
                    )}
                    <button onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default TimerCard;
