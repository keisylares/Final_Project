function updatePrices() {
  let taxes = 12.5;
  let subprice = 0;
  let max_id;
  
  max_id = localStorage.getItem('id');
  if (max_id) {
    let id;
    for (id = 0; id <= max_id; id++) {
      subprice = (subprice + parseInt(document.getElementById('price_hidden['+id+']').value));
    }
  }

  total = (subprice + taxes);
  
  document.getElementById('subtotal').innerHTML = subprice;
  document.getElementById('taxes').innerHTML = taxes;
  document.getElementById('total').innerHTML = total;
}
