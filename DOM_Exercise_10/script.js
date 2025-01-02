// selecting the required elements
const parent = document.querySelector("#parent");
const addButton = document.querySelector("#add-child-elt");
const removeButton = document.querySelector("#remove-child-elt");

// adding event listeners to the buttons
addButton.addEventListener("click", function () {
  // creating new element
  const newElement = document.createElement("p");
  newElement.textContent =
    "This is a new element created in the DOM and is added as the last child element of the parent element";
  parent.appendChild(newElement);
});

removeButton.addEventListener("click", function () {
  parent.removeChild(document.querySelector("p"));
});
