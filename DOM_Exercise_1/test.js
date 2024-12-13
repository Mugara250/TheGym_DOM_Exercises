// function attachBuyEvents() {
//   // selecting all buttons in the products section
//   const buttons = document.querySelectorAll("#products button");

//   // adding the event listener to them
//   for (let button of buttons) {
//     button.addEventListener("click", function (event) {
//       // accessing the parent of the clicked product
//       const parentOfClicked = event.target.parentElement;
//       parentOfClicked.classList.toggle("sale");

//       // getting details of the clicked product
//       const clickedId = parentOfClicked.getAttribute("data-id");
//       const clickedProductName =
//         parentOfClicked.querySelector("h2").textContent;
//       const clickedPrice = parseFloat(
//         parentOfClicked.querySelector(".price").textContent
//       );
//       const clickedQuantity = parseInt(
//         parentOfClicked.querySelector(".quantity").value
//       );

//       // locating the table body where rows will be added or updated
//       const tableBody = document.querySelector("#cart table tbody");

//       // checking if the row already exists based on data-id
//       // let existingRow = tableBody.querySelector(`[data-id='${clickedId}']`);
//       let existingRow = null;
      
//       const rows = tableBody.querySelectorAll('tr');
//       for (let row of rows) {
//         if (row.getAttribute('data-id') === clickedId) {
//           existingRow = row;
//           break;
//         }
//       }

//       if (existingRow) {
//         // If the row exists, update its content
//         updateRow(existingRow, clickedQuantity, clickedPrice);
//       } else {
//         // If the row does not exist, create a new one
//         addRow(clickedId, clickedProductName, clickedQuantity, clickedPrice);
//       }

//       function addRow(id, productName, quantity, price) {
//         const newRow = document.createElement("tr");
//         newRow.setAttribute("data-id", id);

//         // Creating data cells and appending them to the new row
//         const idCell = document.createElement("td");
//         idCell.textContent = id;

//         const nameCell = document.createElement("td");
//         nameCell.textContent = productName;

//         const quantityCell = document.createElement("td");
//         quantityCell.textContent = quantity;

//         const priceCell = document.createElement("td");
//         priceCell.textContent = price.toFixed(2);

//         const totalCell = document.createElement("td");
//         totalCell.textContent = (quantity * price).toFixed(2);

//         const cells = [idCell, nameCell, quantityCell, priceCell, totalCell];
//         cells.forEach((cell) => newRow.appendChild(cell));

//         tableBody.appendChild(newRow);
//       }

//       function updateRow(row, quantityToAdd, price) {
//         const quantityCell = row.children[2]; // Third column (Quantity)
//         const totalCell = row.children[4]; // Fifth column (Total)

//         const currentQuantity = parseInt(quantityCell.textContent);
//         const newQuantity = currentQuantity + quantityToAdd;

//         quantityCell.textContent = newQuantity;
//         totalCell.textContent = (newQuantity * price).toFixed(2);
//       }
//     });
//   }
// }

// attachBuyEvents();
