function startProgress() {
    const progressCircle = document.getElementById('progressCircle');
    const progressText = document.getElementById('progressText');
    let progressValue = 0;

    const progressInterval = setInterval(() => {
        if (progressValue >= 100) {
            clearInterval(progressInterval);
        } else {
            progressValue++;
            progressText.textContent = `${progressValue}%`;
            progressCircle.style.background = `conic-gradient(#007bff ${progressValue * 3.6}deg, #f7f9fc ${progressValue * 3.6}deg)`;
        }
    }, 50);
}
