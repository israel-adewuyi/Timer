let timerInterval;
let totalSeconds = 0;

function startTimer() {
    timerInterval = setInterval(function () {
        totalSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function stopTimer() {
    clearInterval(timerInterval);
    saveDailyDuration();
    updateChart();
    totalSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('timer').innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function saveDailyDuration() {
    // Send a request to the backend to save the daily duration
    // You can use Fetch API or other methods to communicate with the backend
}

function updateChart() {
    // Update the chart with the daily durations
    // You may use a chart library like Chart.js for this purpose
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
