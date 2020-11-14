//Upload Image //

function readFile() {
  if (this.files && this.files[0]) {
    var FR= new FileReader();
    FR.addEventListener("load", function(e) {
      document.getElementById("output").src = e.target.result; // Show thw img on the square
      document.getElementById("img_b64").value = e.target.result; // Put uo the img contente in localStorage 
    });
    FR.readAsDataURL( this.files[0] );
  }
}
document.getElementById("file").addEventListener("change", readFile);


/*
window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      alert('teste');
      if (this.files && this.files[0]) {
        let img = document.querySelector("#file");
        img.src = URL.createObjectURL(this.files[0]);
        img.onload = imageIsLoaded;
      }
    });
});
*/

/* let loadFile = function (event) {
  let image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
}; */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("myForm").addEventListener("submit", handleForm);
});

//stop the page reloading
function handleForm(ev) {
  ev.preventDefault();

  //console.dir(ev.target);
  let myForm = ev.target;
  let formDataItems = new FormData(myForm);

  //add more things that were not in the form
  fd.append("api-key", "myApiKey");

  //look at all the contents
  for (let key of formDataItems.keys()) {
    console.log(key, formDataItems.get(key));
  }
}
function convert(formData) {
  let obj = {};
  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
}

function clickedButton() {
  let id;
  id = localStorage.getItem("id");
  if (!id) {
    id = 0;
  } else {
    id++;
  }

  localStorage.setItem("id", id);

  localStorage.setItem(
    "productName[" + id + "]",
    document.getElementById("productName").value
  );
  localStorage.setItem(
    "productPrice[" + id + "]",
    document.getElementById("productPrice").value
  );
  localStorage.setItem(
    "productDescription[" + id + "]",
    document.getElementById("productDescription").value
  );
  localStorage.setItem(
    "img_b64[" + id + "]",
    document.getElementById("img_b64").value
  );

  alert("Item added successfuly!");
  document.getElementById("myForm").reset();
  document.getElementById("output").src = 'images.png'; // COLOCA A IMAGEM 'images.png' PADR�O DE VOLTA
}
