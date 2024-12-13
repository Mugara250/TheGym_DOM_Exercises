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

      // getting details of the clicked product
      const clickedId = parentOfClicked.getAttribute("data-id");
      const clickedProductName =
        parentOfClicked.querySelector("h2").textContent;
      const clickedPrice = parseFloat(parentOfClicked.querySelector(".price").textContent);
      const clickedQuantity = parseInt(parentOfClicked.querySelector(".quantity").value);
      // console.log({idOfClicked, productName, priceOfClicked, quantityOfClicked});


      // select the table section where we are going to add the new row
      const tableBody = document.querySelector("#cart table tbody");

      // variable to track rows that already exist
      let existingRow = null;


      // loop through the rows to find if the row we want to add already exists
      const rows = tableBody.querySelectorAll("tr");
      for (let row of rows) {
        // checking if a certain row with the data-id of the clicked product exists
        if (row.getAttribute("data-id") === clickedId) {
          existingRow = row;
          break;
        }
      }

      if (existingRow) {
        updateCells(existingRow, clickedQuantity, clickedPrice); // update cells of the existing row
      } else {
        addCells(clickedId, clickedProductName, clickedQuantity, clickedPrice); // add cells to the new row and add the new row to the table body as well
      }

      // function that updates the existing row
      function updateCells(row, quantityToAdd, price) {
        //updating the quantity
        const currentQuantity = parseInt(row.children[2].textContent); // third cell in the row
        const newQuantity = currentQuantity + quantityToAdd;
        row.children[2].textContent = newQuantity;

        // updating the total
        const newTotal = (newQuantity * price).toFixed(2);
        row.children[4].textContent = newTotal;
         
        // updating the cumulative totals
        updateCumulativeTotals();
      }

      // function that adds cells to a non-existing row and adds that row to the table body
      function addCells(id, productName, quantity, price) {
        // creating the new row with a given data-id attribute
        const newRow = document.createElement("tr");
        newRow.setAttribute("data-id", id);

        // create an array to store the new cells
        const cells = [];

        // creating cells to add to the new row and adding contents to them
        const idCell = document.createElement("td"); // cell for id
        idCell.textContent = id;
        cells.push(idCell);

        const productNameCell = document.createElement("td"); // cell for name of the product
        productNameCell.textContent = productName;
        cells.push(productNameCell);

        const quantityCell = document.createElement("td"); // cell for quantity data
        quantityCell.textContent = quantity;
        cells.push(quantityCell);

        const priceCell = document.createElement("td"); // cell for price of the product
        priceCell.textContent = price;
        cells.push(priceCell);

        const totalCell = document.createElement('td');
        const total = (price * quantity).toFixed(2)
        totalCell.textContent = total;
        totalCell.classList.add('total')
        cells.push(totalCell);


        // deleting rows
        // creating delete link
        const deleteLink = document.createElement('a');
        const deleteCell = document.createElement('td');
        deleteLink.setAttribute('href', '#');

        deleteLink.addEventListener('click', function(event) {
          event.preventDefault();
          newRow.remove();
          updateCumulativeTotals();
        })
        

        // creating delete image
        const deleteIcon = document.createElement('img');
        deleteIcon.src = "./cropped-favicon.webp";
        deleteIcon.alt = "deleting icon";
        deleteIcon.width = "15";
        deleteIcon.height = "15";
        // adding the delete icon image to the delete link
        deleteLink.appendChild(deleteIcon);

        // adding the delete link to the delete cell
        deleteCell.appendChild(deleteLink);
        cells.push(deleteCell);
    
        // adding the cells to the new row using a loop
        for (let cell of cells) {
          newRow.appendChild(cell);
        }


        // adding the new row to the table body
        tableBody.appendChild(newRow);

        // updating the cumulative totals
        updateCumulativeTotals();
      }

      function updateCumulativeTotals () {
        let allTotals = document.getElementsByClassName('total')
        let totalAmount = 0
        for(let i = 0; i < allTotals.length; i++){
          totalAmount += Number(allTotals[i].textContent)
        }

        let totalsField = document.querySelector('#cart table tfoot tr').children[1];
        if(totalsField) totalsField.textContent = totalAmount
      }

      function removeRow(row) {

      }
     
    });
  }
}

attachBuyEvents();
