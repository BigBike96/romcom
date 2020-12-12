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
var savedCoversView = document.querySelector('.saved-view');

var makeBookBtn = document.querySelector('.create-new-book-button');

//form variables
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputFirstDesc = document.querySelector('.user-desc1');
var inputSecondDesc = document.querySelector('.user-desc2');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.onload = showRandomCover;
// Add your event listeners here 👇
randomCvrBtn.addEventListener('click', showRandomCover);

customCvrBtn.addEventListener('click', showFormView);

viewCoversBtn.addEventListener('click', viewSavedCovers);

homeBtn.addEventListener('click', showHomeView);

makeBookBtn.addEventListener('click', createNewCover);
// Create your event handlers and other functions here 👇


function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverTagLine1.innerText = descriptors[getRandomIndex(descriptors)];
  coverTagLine2.innerText = descriptors[getRandomIndex(descriptors)];
}

function showFormView() {
  homeView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  saveCvrBtn.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
  customFormView.classList.remove('hidden');
}

function viewSavedCovers() {
  homeView.classList.add('hidden');
  customFormView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  saveCvrBtn.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
  savedCoversView.classlist.remove('hidden');
}

function showHomeView() {
  homeView.classList.remove('hidden');
  customFormView.classList.add('hidden');
  homeBtn.classList.add('hidden');
  saveCvrBtn.classList.remove('hidden');
  randomCvrBtn.classList.remove('hidden');
  savedCoversView.classlist.add('hidden');
}

function createNewCover() {

  var createdCover = new Cover(inputCover.value, inputTitle.value, inputFirstDesc.value, inputSecondDesc.value);
  coverImage.src = createdCover.cover;
  coverTitle.innerText = createdCover.title;
  coverTagLine1.innerText = createdCover.tagline1;
  coverTagLine2.innerText = createdCover.tagline2;

  event.preventDefault();
  //Push input values to respective arrays
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputFirstDesc.value);
  descriptors.push(inputSecondDesc.value);

  showHomeView();
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
