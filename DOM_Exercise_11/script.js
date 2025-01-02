const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");
const tableHeadRow = document.createElement("tr");
const tableBodyRow = document.createElement("tr");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const activities = [
  "Studying",
  "Working out",
  "Visiting Grandpa",
  "Attending football game",
  "Dinner with family",
  "Music rehearsals",
  "Going to the beach",
];
document
  .querySelector("#create-table")
  .addEventListener("click", function (event) {
    // thead section
    const emptyCell = document.createElement("td");
    emptyCell.style.width = "100px";
    const emptyText = document.createTextNode("");
    emptyCell.appendChild(emptyText);
    tableHeadRow.appendChild(emptyCell);

    for (let i = 0; i < days.length; i++) {
      const newHeading = document.createElement("th");
      newHeading.style.width = "200px";
      newHeading.style.align = "center";
      const text = document.createTextNode(days[i]);
      newHeading.appendChild(text);
      tableHeadRow.appendChild(newHeading);
    }
    tableHead.appendChild(tableHeadRow);

    // tbody section
    const activitiesCell = document.createElement("th");
    const header = document.createTextNode("Activities");
    activitiesCell.appendChild(header);
    tableBodyRow.appendChild(activitiesCell);

    for (let i = 0; i < activities.length; i++) {
      const newCell = document.createElement("td");
      const cellText = document.createTextNode(activities[i]);
      newCell.appendChild(cellText);
      tableBodyRow.appendChild(newCell);
    }
    tableBody.appendChild(tableBodyRow);

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    table.setAttribute("border", "2");
    table.style.margin = "30px";
    document.body.appendChild(table);
  });
