/* let info = document.querySelectorAll('#productName, #productPrice, #productDescription');
let productName = info[0].value;
let productPrice = info[1].value;
let productDescription = info[2].value;
let totalInfo = [productName, productPrice, productDescription];

function clickedButton() {
    localStorage.setItem(info);
}
 */

// image upload
function Show(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }