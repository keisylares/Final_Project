let max_id;
max_id = localStorage.getItem("id");
if (max_id) {
  let id;
  for (id = 0; id <= max_id; id++) {
    document.write('<div id="itemsData">');
    document.write(
      '<img id="" class="" src="'+localStorage.getItem("img_b64[" + id + "]")+'" alt="" width="100" height="100">'
    );
    document.write('<div class="productSpecs">');
    document.write(
      '<div id="productName" class="productName">' +
        localStorage.getItem("productName[" + id + "]") +
        "</div>"
    );
    document.write(
      '<div id="productDescription" class="productDescription">' +
        localStorage.getItem("productDescription[" + id + "]") +
        "</div>"
    );
    document.write(
      '<div id="productPrice" class="productPrice">R$ ' +
        localStorage.getItem("productPrice[" + id + "]") +
        "</div>"
    );
    document.write(
      '<input type="hidden" id="price_hidden[' +
        id +
        ']" value="' +
        localStorage.getItem("productPrice[" + id + "]") +
        '">'
    );
    document.write("</div>");
    document.write('<input type="number" id="quantity[' + id + ']" name="quantity[' + id + ']" class="quantity" min="1" max="20" value="1">');
    document.write("</div>");
  }
}
