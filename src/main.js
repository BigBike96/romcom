// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagLine1 = document.querySelector('.tagline-1');
var coverTagLine2 = document.querySelector('.tagline-2');

var randomCvrBtn = document.querySelector('.random-cover-button');

var customCvrBtn = document.querySelector('.make-new-button');
var customFormView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var homeBtn = document.querySelector('.home-button');
var viewCoversBtn = document.querySelector('.view-saved-button');
var saveCvrBtn = document.querySelector('.save-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.onload = showRandomCover;
// Add your event listeners here 👇
randomCvrBtn.addEventListener('click', showRandomCover);

customCvrBtn.addEventListener('click', showFormView);

// Create your event handlers and other functions here 👇


function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverTagLine1.innerText = descriptors[getRandomIndex(descriptors)];
  coverTagLine2.innerText = descriptors[getRandomIndex(descriptors)];
}

function showFormView() {
  homeView.classList.add('hidden');
  customFormView.classList.remove('hidden');
  homeBtn.classList.remove('hidden');
  saveCvrBtn.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
