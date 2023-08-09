function changeContent() {
  let rowNumber = window.prompt('Input the Row number', '1');
  let colNumber = window.prompt('Input the Column number', '1');
  let content = window.prompt('Input the Cell content');
  let row =
    document.getElementById('myTable').rows[parseInt(rowNumber) - 1].cells;
  row[parseInt(colNumber - 1)].innerHTML = content;
}
