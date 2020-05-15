// Summary: This will create a timer to run timer throughout the application.
import * as types from '../action-types';

// Summary: This will start a decrement timer throughout the application.
export const startTimer = (initialDurationSeconds) => {
  
    const totalSecondsPassed = initialDurationSeconds;
    let totalMinutesPassed = Math.floor(totalSecondsPassed/60);
    let hours = Math.floor(totalMinutesPassed/60);
    let minutes = totalMinutesPassed % 60;
    let seconds = totalSecondsPassed % 60;
    let totalSeconds = initialDurationSeconds - 1;     
    let currentTimer = {
        totalSeconds: initialDurationSeconds -1,
        hours: hours,
        minutes: minutes,
        seconds: seconds 
    };
    return { 
        type: types.TIMER_START,
        payload: currentTimer
    };
}

// Summary: This will stop a timer throughout the application.
export const stopTimer = () => {
    return { type: types.CLEAR_TIMER };
}

