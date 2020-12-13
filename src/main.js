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

var savedCoversHTML = document.querySelector('.saved-covers-section');


var makeBookBtn = document.querySelector('.create-new-book-button');

//form variables
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputFirstDesc = document.querySelector('.user-desc1');
var inputSecondDesc = document.querySelector('.user-desc2');


// We've provided a few variables below
var savedCovers = [
  //new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.onload = showRandomCover;
// Add your event listeners here 👇
randomCvrBtn.addEventListener('click', showRandomCover);

customCvrBtn.addEventListener('click', showFormView);

viewCoversBtn.addEventListener('click', viewSavedCovers);

homeBtn.addEventListener('click', showHomeView);

makeBookBtn.addEventListener('click', createNewCover);

saveCvrBtn.addEventListener('click', saveCover);
// Create your event handlers and other functions here 👇


function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverTagLine1.innerText = descriptors[getRandomIndex(descriptors)];
  coverTagLine2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, coverTagLine1.innerText, coverTagLine2.innerText);
}

function showFormView() {
  homeView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  saveCvrBtn.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
  customFormView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
}

function viewSavedCovers() {
  homeView.classList.add('hidden');
  customFormView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  saveCvrBtn.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
  savedCoversView.classList.remove('hidden');

  savedCoversHTML.innerHTML = "";
    for(var i = 0; i < savedCovers.length; i++) {
     savedCoversHTML.innerHTML +=
     `<section class="main-cover" id=${savedCovers[i].id}>
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
     </section>`
    };
}

function showHomeView() {
  homeView.classList.remove('hidden');
  customFormView.classList.add('hidden');
  homeBtn.classList.add('hidden');
  saveCvrBtn.classList.remove('hidden');
  randomCvrBtn.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
}

function createNewCover() {

  coverImage.src = inputCover.value;
  coverTitle.innerText = inputTitle.value;
  coverTagLine1.innerText = inputFirstDesc.value;
  coverTagLine2.innerText = inputSecondDesc.value;

  currentCover = new Cover(coverImage.src, coverTitle.innerText, coverTagLine1.innerText, coverTagLine2.innerText);
  // currentCover = new Cover(coverImage, coverTitle, coverTagLine1, coverTagLine2);
  event.preventDefault();
  //Push input values to respective arrays
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputFirstDesc.value);
  descriptors.push(inputSecondDesc.value);

  showHomeView();
}

function saveCover() {
// move data from inputs into savedCoversView
//var savedCoverInstance = currentCover;
// new Cover(coverImage.value, coverTitle.value, coverTagLine1.value, coverTagLine2.value);
//console.log(savedCoverInstance);
if(!savedCovers.includes(currentCover)) {
savedCovers.push(currentCover);
console.log(savedCovers);
 }
// coverImage.src =
// coverTitle.innerText =
// coverTagLine1.innerText =
// coverTagLine2.innerText =
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
