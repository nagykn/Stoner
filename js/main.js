//Selectors
const nameInput = document.querySelector('.name-input');
const nameButton = document.querySelector('.name-button');
const nameList = document.querySelector('.name-list');

//Event Listeners
document.addEventListener('DOMContentLoaded', getNames);
nameButton.addEventListener('click', addName);
nameList.addEventListener('click', deleteName);


//Functions
function addName(event) {
  event.preventDefault(); //Form submitting

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('name');

  const newName = document.createElement('li');
  name = nameInput.value.trim().toProperCase()
  newName.innerText = name;

  newName.classList.add('name-item');
  nameDiv.appendChild(newName);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  nameDiv.appendChild(trashButton);
  if (name !== "") {
    saveLoacalNames(name);
    nameList.appendChild(nameDiv);
  }
  nameInput.value = "";
}

function deleteName(event) {
  const item = event.target;
  if (item.classList[0] === 'trash-btn') {
    const name = item.parentElement;
    name.classList.add('fall');
    removeLocalName(name);
    name.addEventListener('transitioned', function(){
      name.remove();
    });
  }
}

function saveLoacalNames(name) {
  let names;
  if (localStorage.getItem('names') === null) {
    names = [];
  } else {
    names = JSON.parse(localStorage.getItem('names'));
  }
  names.push(name);
  localStorage.setItem('names',JSON.stringify(names));
}

function getNames() {
  let names;
  if (localStorage.getItem('names') === null) {
    names = [];
  } else {
    names = JSON.parse(localStorage.getItem('names'));
  }
  names.forEach(name => {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');

    const newName = document.createElement('li');
    newName.innerText = name;

    newName.classList.add('name-item');
    nameDiv.appendChild(newName);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    nameDiv.appendChild(trashButton);

    nameList.appendChild(nameDiv);
  });
}

function removeLocalName(name){
  let names;
  if (localStorage.getItem('names') === null) {
    names = [];
  } else {
    names = JSON.parse(localStorage.getItem('names'));
  }
  const nameIndex = name.children[0].innerText;
  names.splice(names.indexOf(nameIndex),1);

  localStorage.setItem('names', JSON.stringify(names));
}

//Prototypes 
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

//Pwa
window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

