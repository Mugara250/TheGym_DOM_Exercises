// selecting the set text and remove text buttons plus the textarea
const setTextButton = document.querySelector("#set-text-btn");
const removeTextButton = document.querySelector("#remove-text-btn");
const textArea = document.querySelector("textarea");

// adding event listeners to our buttons
setTextButton.addEventListener("click", function setText() {
  textArea.style.fontSize = "1rem";
  textArea.textContent =
    "I have set the text inside the area. It is really cool to learn how this is done.";
  setTextButton.removeEventListener("click", setText);
});

removeTextButton.addEventListener("click", function () {
  textArea.textContent = "";
});
