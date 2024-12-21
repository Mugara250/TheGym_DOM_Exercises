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



timerCount.textContent = timeTotal;

let timerID = window.setInterval(countDownTimer, 1000);

function countDownTimer() {
    timeTotal--;
    if (timeTotal >= 0) {
      timerCount.textContent = timeTotal;
    } else {
    //   stopTimer(timerID);
        window.clearInterval(timerID);
    }
}

// function updateTimerDisplay(time) {
//     timerCount.textContent = time;
// }
// updateTimerDisplay(timeTotal)

document.getElementById('btn-five').addEventListener('click', function addFive() {
    timeTotal += 6;
})

document.getElementById('btn-ten').addEventListener('click', function addTen() {
    timeTotal += 11;
})

document.getElementById('btn-fifteen').addEventListener('click', function addFifteen() {
    timeTotal += 16;
})


