import {reviews} from './content.js';

let leftButton = document.querySelector("#left_btn");
let rightButton = document.querySelector("#right_btn");
let randButton = document.querySelector(".rand_btn");

let image = document.querySelector(".profile_picture");
let name = document.querySelector(".name");
let job = document.querySelector(".job_title");
let review = document.querySelector(".review");

let currentReview = 0;

leftButton.addEventListener("click", function() {
    currentReview--;
    if (currentReview === -1) {
        currentReview = reviews.length - 1;
    }
    updateReviewContent();
});
rightButton.addEventListener("click", function() {
    currentReview++;
    if (currentReview === reviews.length) {
        currentReview = 0;
    }
    updateReviewContent();
});

randButton.addEventListener("click", function() {
    let temp = currentReview
    while (temp === currentReview) {
        currentReview = getRandomInt(0, reviews.length-1);
    }
    console.log(currentReview);
    updateReviewContent();
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateReviewContent() {
    image.style.backgroundImage = "url('" + reviews[currentReview].img + "')";
    name.innerHTML = reviews[currentReview].name;
    job.innerHTML = reviews[currentReview].job.toUpperCase();
    review.innerHTML = reviews[currentReview].text;
}