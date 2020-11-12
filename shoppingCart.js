
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

  alert('Item added successfuly!');
  document.getElementById('myForm').reset();
}