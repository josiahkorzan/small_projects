let simpleBtn = document.querySelector("#simple_btn");
let hexBtn = document.querySelector("#hex_btn");
let colorBtn = document.querySelector(".color_btn");

let colorName = document.querySelector(".color_name");
let simple = true;
let currentIndex = 0;

const simpleColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'white', 'aqua', 'brown'];

simpleBtn.addEventListener("click", function() {
    if (!simple) {
        simple = true;
        updateColors();
    }
});

hexBtn.addEventListener("click", function() {
    if (simple) {
        simple = false;
        updateColors();
    }
});

colorBtn.addEventListener("click", updateColors);

function updateColors() {
    if (simple) {
        currentIndex++;
        colorName.innerHTML = simpleColors[currentIndex % simpleColors.length];
        document.querySelector("body").style.backgroundColor = simpleColors[currentIndex % simpleColors.length];
    } else {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        colorName.innerHTML = "#" + randomColor;
        document.querySelector("body").style.backgroundColor = "#" + randomColor;
    }
}