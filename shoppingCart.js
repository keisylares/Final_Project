function updatePrices() {
  let taxes = 12.5;
  let subprice = 0;
  let max_id;
  
  max_id = localStorage.getItem('id');
  if (max_id) {
    let id;
    for (id = 0; id <= max_id; id++) {
      subprice = (subprice + (parseInt(document.getElementById('price_hidden['+id+']').value) * parseInt(document.getElementById('quantity['+id+']').value))); // CALCULA O SUBPRICE
    }
  }

  total = (subprice + taxes); // SOMA O SUBPRICE COM AS TAXAS
  
  document.getElementById('subtotal').innerHTML = subprice;
  document.getElementById('taxes').innerHTML = taxes;
  document.getElementById('total').innerHTML = total;
}

let inputs_quantities = document.querySelectorAll('input[type="number"]'); // GERA UMA LISTA COM TODOS INPUT DO TIPO NUMBER
for (var input of inputs_quantities) {
  input.addEventListener('change', updatePrices); // PARA CADA INPUT DO TIPO NUMBER ELE GERA UM EVENTO QUE ATUALIZA OS PREÇOS SERMPRE QUE O INPUT É ALTERADO
}

window.onload = function() {
  updatePrices(); // QUANDO A PÁGINA FOR CARREGADA, OS PREÇOS SÃO ATUALIZADOS
};
