function insert_Row() {
  let table = document.getElementById('sampleTable');
  let newRow = table.insertRow();
  let rowSize = 2;
  let totalRow = document.getElementsByTagName('tr');
  for (let index = 0; index < rowSize; index++) {
    let cell = newRow.insertCell(index)
    cell.innerHTML = `Row ${totalRow.length} cell${index + 1}`;
  }
}
