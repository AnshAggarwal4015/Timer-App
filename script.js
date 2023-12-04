let timer;
let totalSeconds = 0;
let isTimerRunning = false;

const startPauseTimer = () => {
    if (!isTimerRunning) {
        startTimer();
        document.getElementById('startPauseButton').innerText = 'Pause';
    } else {
        pauseTimer();
        document.getElementById('startPauseButton').innerText = 'Resume';
    }
};

const startTimer = () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            document.getElementById('timer').innerText = '00:00:00';
            alert('Timer is up!');
            resetTimer();
        } else {
            const hoursDisplay = Math.floor(totalSeconds / 3600);
            const minutesDisplay = Math.floor((totalSeconds % 3600) / 60);
            const secondsDisplay = totalSeconds % 60;

            document.getElementById('timer').innerText =
                `${hoursDisplay < 10 ? '0' : ''}${hoursDisplay}:${minutesDisplay < 10 ? '0' : ''}${minutesDisplay}:${secondsDisplay < 10 ? '0' : ''}${secondsDisplay}`;

            totalSeconds--;
        }
    }, 1000);

    isTimerRunning = true;
};

const pauseTimer = () => {
    clearInterval(timer);
    isTimerRunning = false;
};

const resetTimer = () => {
    clearInterval(timer);
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('timer').innerText = '00:00:00';
    document.getElementById('startPauseButton').innerText = 'Start';
    isTimerRunning = false;
};
