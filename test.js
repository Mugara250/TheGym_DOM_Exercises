function attachBuyEvents() {
  const buttons = document.querySelectorAll("#products button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      // accessing the parent of the clicked product
      const parentOfClicked = event.target.parentElement;
      // getting the clicked product
      const clickedDataObject = {
        clickedId: parentOfClicked.getAttribute("data-id"),
        clickedProductName: parentOfClicked.querySelector("h2").textContent,
        clickedPrice: parseInt(
          parentOfClicked.querySelector(".price").textContent
        ),
        clickedQuantity: parseInt(
          parentOfClicked.querySelector(".quantity").value
        ),
      };
      // Find the cart table
      const tableBody = document.querySelector("#cart table tbody");
      // Check if the product is already in the cart
      const existingRow = Array.from(tableBody.rows).find(
        (row) =>
          row.cells[1].textContent === clickedDataObject.clickedProductName
      );
      existingRow
        ? updateExistingRow(existingRow, clickedDataObject)
        : addNewRow(tableBody, clickedDataObject);

      updateCartTotal();
    });
  });
}

function addNewRow(
  tableBody,
  { clickedId, clickedPrice, clickedProductName, clickedQuantity }
) {
  const newRow = tableBody.insertRow();
  newRow.setAttribute("data-id", clickedId);
  // Create and populate individual cells
  const newIdDataCell = newRow.insertCell(0);
  newIdDataCell.textContent = clickedId;

  const newProductDataCell = newRow.insertCell(1);
  newProductDataCell.classList.add("cart-product");
  newProductDataCell.textContent = clickedProductName;

  const newQuantityDataCell = newRow.insertCell(2);
  newQuantityDataCell.classList.add("cart-quantity");
  newQuantityDataCell.textContent = clickedQuantity;

  const newPriceDataCell = newRow.insertCell(3);
  newPriceDataCell.classList.add("cart-price");

  newPriceDataCell.textContent = clickedPrice;

  const newTotalDataCell = newRow.insertCell(4);
  newTotalDataCell.classList.add("cart-total");
  newTotalDataCell.textContent = clickedQuantity * clickedPrice;
  document.querySelector("#cart table tbody").appendChild(newRow);
}

function updateExistingRow(existingRow, { clickedQuantity, clickedPrice }) {
  // Update the existing row's quantity and total
  const quantityCell = existingRow.cells[2];
  const totalCell = existingRow.cells[4];
  const newQuantity = parseInt(quantityCell.textContent) + clickedQuantity;
  quantityCell.textContent = newQuantity;
  totalCell.textContent = newQuantity * clickedPrice;
}
function updateCartTotal() {
  // Update the total in the footer
}
attachBuyEvents();
