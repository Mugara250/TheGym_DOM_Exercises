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
  }
  attachBuyEvents();