var DIFICULTY = parseInt(localStorage.DIFICULTY || 0);

const selectInput = document.querySelector("#dificulty");
const options = document.querySelectorAll("#dificulty > option")


document.addEventListener('DOMContentLoaded', (e) => {
    options[DIFICULTY].setAttribute("selected","selected")
});

function setDificulty(element) {
    console.log(document.querySelector("#dificulty").value);
    DIFICULTY = document.querySelector("#dificulty").value
    localStorage.DIFICULTY = DIFICULTY;    
}