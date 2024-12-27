// Applying functional programming

document.addEventListener('DOMContentLoaded', function() {
    let timerCount = document.getElementById("timer"); // element that'll display the time
    totalTime = 10; // initial time for the countdown
    let buttons = document.getElementsByTagName('button'); // selecting buttons that'll be
    // targeted for removal
    let timerID; // timeout id of the setInterval() window method

    // updating the timer display
    function updateTimerDisplay () {
        timerCount.textContent = totalTime;
    }

    // removing the buttons
    function removeButtons() {
        Array.from(buttons).forEach(element => {
            element.style.display = 'none';
        });
    }

    // countdown logic
    timerID = window.setInterval(function () {
        totalTime --;

        // ensure that the countdown doesn't reach negative
        if (totalTime<=0) {
            updateTimerDisplay();
            removeButtons(); // clear or remove the buttons
            window.clearInterval(timerID); // stop the countdown
        } else {
            updateTimerDisplay();
        }
    }, 1500)

    // adding more seconds to the timer
    document.querySelector('#btn-five').addEventListener('click', function() {
        totalTime += 5;
        updateTimerDisplay();
    })

    document.querySelector('#btn-ten').addEventListener('click', function() {
        totalTime += 10;
        updateTimerDisplay();
    })

    document.querySelector('#btn-fifteen').addEventListener('click', function () {
        totalTime += 15;
        updateTimerDisplay();
    })

    updateTimerDisplay(); // initialize the timer
})
