// the actual to do list
const toDoList = document.getElementById("toDoList");

// the add button
const addButton = document.getElementById("add");

// adding a click event to the add button
addButton.addEventListener("click", function (event) {
  // getting the input value
  const inputData = document.querySelector("input").value;
  console.log(inputData);

  // creating the list item
  const listItem = document.createElement("li");
  // adding an attribut to the list item

  // creating the label element
  const labelElement = document.createElement("label");

  // creating the input element with type check box
  const inputElementList = document.createElement('input');
  // adding the attributes to the input element
  inputElementList.setAttribute('type', 'checkbox');
  // stylin the input element
  inputElementList.style.margin = '0 10px'

  // adding the input element into label element
  labelElement.appendChild(inputElementList);

  // adding the label element into the list element
  listItem.appendChild(labelElement);

  // creating span element to hold the input data
  const textNode = document.createTextNode(inputData);

  // adding the text node to the label element
  labelElement.appendChild(textNode);

  // styling the list item
  listItem.style.textAlign = "center";
  listItem.style.fontSize = "1.2rem";

  // creating a remove button
  const removeButton = document.createElement("button");
  // adding class attribute to the button
  removeButton.setAttribute("class", "remove");
  // adding text content to remove button
  removeButton.textContent = "REMOVE";
  // styling the button
  removeButton.style.margin = "0 10px";

  // creating event listener for the remove button
  removeButton.addEventListener("click", function (event) {
    const removeItem = event.target.parentElement;
    toDoList.remove(removeItem);
  });

  // adding the button to the list item
  listItem.appendChild(removeButton);

  // adding the list item into the to do list
  toDoList.appendChild(listItem);

});
