function createTable() {
  // Input table rows and column
  let rowNumber = window.prompt('Input number of rows', '1');
  let colNumber = window.prompt('Input number of columns', '1');
  let totalRow = parseInt(rowNumber);
  let totalColumn = parseInt(colNumber);

  // Handle insert row
  for (let row = 0; row < totalRow; row++) {
    let newRow = document.getElementById('myTable').insertRow(row);

    // Handle insert
    for (let col = 0; col < totalColumn; col++) {
      newCol = newRow.insertCell(col);
      newCol.innerHTML = `Row: ${row + 1} Column: ${col + 1}`;
    }
  }
}
