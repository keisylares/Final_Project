// gettin data from form
const form = document.getElementById('mainForm');

addToCart.addEventListener("click", (event) => {
  event.preventDefault();

  function items() {
    let formItems = {
      product: form.productName.value,
      price: form.productPrice.value,
      description: form.productDescription.value,
      img: form.file.value,
    }
    formItems = JSON.stringify(formItems);
    localStorage.setItem('productStorage', formItems)
  };
  // uploading product picture
  window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]);
        img.onload = imageIsLoaded;
      }
    });
  });