
document.addEventListener('DOMContentLoaded', () => {
    document
      .getElementById('myForm')
      .addEventListener('submit', handleForm);
  });

  function handleForm(ev) {
    ev.preventDefault(); //stop the page reloading
    
    //console.dir(ev.target);
    let myForm = ev.target;
    let formDataItems = new FormData(myForm);

    //add more things that were not in the form
    fd.append('api-key', 'myApiKey');

    //look at all the contents
    for (let key of formDataItems.keys()) {
      console.log(key, formDataItems.get(key));
    }};
    function convert(formData) {
        let obj = {};
        for (let key of formData.keys()) {
          obj[key] = formData.get(key);
        }
        return JSON.stringify(obj);
      }


      /* CODIGO DA FOTO
       window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});

function imageIsLoaded() { 
  alert(this.src);  // blob url
  // update width and height ...
} */

function clickedButton() {
  let id;
  id = localStorage.getItem('id');
  if (!id) { id = 0; }
  else { id++; }

  localStorage.setItem('id', id);
  
  localStorage.setItem('productName['+id+']', document.getElementById('productName').value);
  localStorage.setItem('productPrice['+id+']', document.getElementById('productPrice').value);
  localStorage.setItem('productDescription['+id+']', document.getElementById('productDescription').value);
  localStorage.setItem('file['+id+']', document.getElementById('file').value);

  alert('Produto cadastrado com sucesso!');
  document.getElementById('myForm').reset();
}