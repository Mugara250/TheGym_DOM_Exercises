// the actual to do list
const toDoList = document.getElementById('toDoList');

// the add button
const addButton = document.getElementById('add');

// adding a click event to the add button
addButton.addEventListener('click', function (event) {
    // getting the input value
    const inputData = document.querySelector('input').value;
    console.log(inputData)

    // creating the list item
    const listItem = document.createElement('li');
    // adding an attribut to the list item
    listItem.setAttribute
    // adding the input value into the li
    listItem.textContent = inputData;
    // styling the list item

    listItem.style.textAlign = 'center';
    listItem.style.fontSize = '1.2rem'

    // creating a remove button
    const removeButton = document.createElement('button');
    // adding class attribute to the button
    removeButton.setAttribute('class', 'remove');
    // adding text content to remove button
    removeButton.textContent = 'REMOVE';
    // styling the button
    removeButton.style.margin = '0 10px';

    // creating event listener for the remove button
    removeButton.addEventListener('click', function(event) {
        const removeItem = event.target.parentElement;
        toDoList.remove(removeItem);
    })

    // adding the button to the list item
    listItem.appendChild(removeButton);

    // adding the list item into the to do list
    toDoList.appendChild(listItem);
})