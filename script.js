// function changeAllArticleColors() {
//     // selecting all the articles inside the #products section
//     const articles = document.getElementById('products').querySelectorAll('article');
//     console.log(articles);

//     // looping through the articles
//     for (let article of articles) {
//         article.classList.add("sale");
//     }
// }
// changeAllArticleColors();

function attachBuyEvents() {
  // selecting all buttons in the products section
  const buttons = document.querySelectorAll("#products button");

  // adding the event listener to them
  for (let button of buttons) {
    button.addEventListener("click", function (event) {
      // accessing the parent of the clicked product
      const parentOfClicked = event.target.parentElement;
      parentOfClicked.classList.toggle("sale");

      // getting of the clicked product
      const clickedId = parentOfClicked.getAttribute("data-id");
      const clickedProductName =
        parentOfClicked.querySelector("h2").textContent;
      const clickedPrice = parentOfClicked.querySelector(".price").textContent;
      const clickedQuantity = parentOfClicked.querySelector(".quantity").value;
      // console.log({idOfClicked, productName, priceOfClicked, quantityOfClicked});

      // creating new table row
      const table = document.querySelector("#cart table thead");
      const newRow = document.createElement("tr");
      newRow.setAttribute("idNew", clickedId);
      table.appendChild(newRow);

      addCells();

      // creating data cells, adding text to them, and adding them to the new row
      function addCells() {
        const id = document.createElement("td");
        id.textContent = clickedId;

        const productName = document.createElement("td");
        productName.textContent = clickedProductName;

        const quantity = document.createElement("td");
        quantity.textContent = parseInt(clickedQuantity);

        const price = document.createElement("td");
        price.textContent = parseInt(clickedPrice);

        const total = document.createElement("td");
        total.textContent = price.textContent * quantity.textContent;

        const cells = [id, productName, quantity, price, total];

        for (let cell of cells) {
          newRow.appendChild(cell);
        }
      }
      function updateCells() {
        quantity.textContent = quantity.textContent + 1;
        total.textContent = price.textContent * quantity.textContent;
      }
    });
  }
  // checking if a row already exists, and if so, we update it instead of adding it to the cart
}
attachBuyEvents();
// function attachBuyEvents() {
//     const buttons = document.getElementById('products').querySelectorAll('button');
//     for (let button of buttons) {
//         button.addEventListener('click', function (event) {

//             // getting the data for the clicked parent element
//             const parent = event.target.parentElement;
//             const attributeId = parent.getAttribute('data-id');
//             const productName = parent.querySelector('h2').textContent;
//             const price = parseFloat(parent.querySelector('.price').textContent);
//             const quantity = parseInt(parent.querySelector('.quantity').value);

//             // selecting the table element insided the cart section and the table rows as well
//             const table = document.querySelector('#cart table');
//             let tableRows = table.querySelectorAll('tr');
//             let productExists = false;

//             if (tableRows.length > 1) {
//                 for (let row of tableRows) {
//                     const rowProductName = row.querySelector('td:nth-child(2)'); // Assuming the second column is the name
//                     if (rowProductName && rowProductName.textContent === productName) {
//                         // If the product already exists, increment the quantity and update the total
//                         const rowQuantityCell = row.querySelector('td:nth-child(3)'); // Assuming the third column is quantity
//                         const rowTotalCell = row.querySelector('td:nth-child(5)'); // Assuming the fifth column is total

//                         let currentQuantity = parseInt(rowQuantityCell.textContent);
//                         let newQuantity = currentQuantity + quantity;
//                         rowQuantityCell.textContent = newQuantity;

//                         let newTotal = newQuantity * price;
//                         rowTotalCell.textContent = newTotal;

//                         productExists = true;
//                         break;
//                     }
//                 }
//             }

//             if (productExists === false) {
//                 // If product does not exist in the table, create a new row
//                 const newRow = document.createElement('tr');
//                 newRow.setAttribute('data-id', attributeId);

//                 // Creating new cells
//                 const id = document.createElement('td');
//                 const name = document.createElement('td');
//                 const quantityCell = document.createElement('td');
//                 const priceCell = document.createElement('td');
//                 const total = document.createElement('td');

//                 // Appending cells to the new row
//                 newRow.appendChild(id);
//                 newRow.appendChild(name);
//                 newRow.appendChild(quantityCell);
//                 newRow.appendChild(priceCell);
//                 newRow.appendChild(total);

//                 // Populating the cells with data
//                 id.textContent = attributeId;
//                 name.textContent = productName;
//                 quantityCell.textContent = quantity;
//                 priceCell.textContent = price.toFixed(2);
//                 total.textContent = (quantity * price).toFixed(2);

//                 // Adding the new row to the table
//                 table.querySelector('thead').appendChild(newRow);
//             }
//         });
//     }
// }

// attachBuyEvents();
