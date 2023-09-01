//Count
let countGraphic = document.querySelector(".count");
let currentCount = 0;

//Buttons
let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");

//Event Listeners
increaseBtn.addEventListener("click", increaseCount);
decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);

//Functions
function increaseCount() {
    currentCount++;
    updateCountGraphic();
}

function decreaseCount() {
    currentCount--;
    updateCountGraphic();
}

function resetCount() {
    currentCount = 0;
    updateCountGraphic();
}

function updateCountGraphic() {
    countGraphic.innerHTML = currentCount;
    if (currentCount > 0) {
        countGraphic.style.color = "green";
    } else if (currentCount < 0) {
        countGraphic.style.color = "red";
    } else {
        countGraphic.style.color = "black";
    }
}