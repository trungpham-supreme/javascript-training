function getOptions() {
  // Get select
  let select = document.querySelectorAll('option');

  // Get total seclect
  let numberItems = select.length;
  let result = `Total: ${numberItems}`;

  // Handle select list and get result
  select.forEach((item) => {
    result = `${result}
    ${item.textContent}`;
  });
  alert(result);
}
