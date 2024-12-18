// document.addEventListener("DOMContentLoaded", () => {
//     let timeRemaining = 10; // Initial countdown time
//     const timerElement = document.getElementById("timer");
//     const buttons = document.querySelectorAll("button");
  
//     // Update the timer display
//     function updateTimerDisplay() {
//       timerElement.textContent = timeRemaining;
//     }
  
//     // Hide buttons
//     function hideButtons() {
//       buttons.forEach(button => (button.style.display = "none"));
//     }
  
//     // Countdown logic
//     const countdown = setInterval(() => {
//       timeRemaining--;
  
//       if (timeRemaining <= 0) {
//         clearInterval(countdown);
//         timeRemaining = 0; // Ensure timer doesn't go negative
//         updateTimerDisplay();
//         hideButtons();
//       } else {
//         updateTimerDisplay();
//       }
//     }, 1000);
  
//     // Add event listeners to buttons
//     document.getElementById("btn-5").addEventListener("click", () => {
//       timeRemaining += 5;
//       updateTimerDisplay();
//     });
  
//     document.getElementById("btn-10").addEventListener("click", () => {
//       timeRemaining += 10;
//       updateTimerDisplay();
//     });
  
//     document.getElementById("btn-15").addEventListener("click", () => {
//       timeRemaining += 15;
//       updateTimerDisplay();
//     });
  
//     // Initialize the timer display
//     updateTimerDisplay();
//   });

