function createTable() {
  // Input table rows and column
  let rowNumber = window.prompt('Input number of rows', '1');
  let colNumber = window.prompt('Input number of columns', '1');

  // Handle insert row
  for (let row = 0; row < parseInt(rowNumber); row++) {
    let newRow = document.getElementById('myTable').insertRow(row);

    // Handle insert 
    for (let col = 0; col < parseInt(colNumber); col++) {
      newCol = newRow.insertCell(col);
      newCol.innerHTML = `Row: ${row + 1} Column: ${col + 1}`;
    }
  }
}
