const form = document.querySelector('form');
const image_url = document.querySelector('#image_url');
const upperText =  document.querySelector('#uppertext');
const lowerText =  document.querySelector('#lowertext');
const gallery = document.querySelector('#gallery');
const meme = document.querySelector('.container');
const reset = document.querySelector('#reset');

reset.addEventListener('click',function(e){
    image_url.value = "";
    uppertext.value = "";
    lowertext.value = "";
    gallery.innerHTML = "";
});
form.addEventListener('submit', function(e){
e.preventDefault();
const memeDiv = document.createElement('div');
memeDiv.classList.add('container');
const img = new Image();
img.src = image_url.value;
memeDiv.appendChild(img);

//Top Text Div
if(upperText.value.length > 0){
let newDiv = createContainer(upperText.value,"top-text");
memeDiv.appendChild(newDiv);
}

//Bottom Text Div
if(lowerText.value.length > 0){
let newDiv = createContainer(lowerText.value,"bottom-text");
memeDiv.appendChild(newDiv);
}

   //Delete Div 
const overlayDiv = document.createElement('div');
overlayDiv.classList.add('overlay');
const deleteBtn = document.createElement('button');
deleteBtn.className="remove";
deleteBtn.innerText = "Remove";

memeDiv.appendChild(overlayDiv);
memeDiv.appendChild(deleteBtn);
// Appending the Meme Div to gallery
gallery.appendChild(memeDiv);


function createContainer(text,classname) {
      let container = document.createElement('div');
     container.className = classname;
      container.innerText = text;
      return container;
  }
});

gallery.addEventListener('click',function(e){
    if(e.target.classList.contains("remove")){
  e.target.parentElement.remove();
  }
});