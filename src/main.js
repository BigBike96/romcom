var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagLine1 = document.querySelector('.tagline-1');
var coverTagLine2 = document.querySelector('.tagline-2');
var customCvrBtn = document.querySelector('.make-new-button');
var homeBtn = document.querySelector('.home-button');
var randomCvrBtn = document.querySelector('.random-cover-button');
var viewCoversBtn = document.querySelector('.view-saved-button');
var saveCvrBtn = document.querySelector('.save-cover-button');
var makeBookBtn = document.querySelector('.create-new-book-button');
var customFormView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var savedCoversHTML = document.querySelector('.saved-covers-section');
var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputFirstDesc = document.querySelector('.user-desc1');
var inputSecondDesc = document.querySelector('.user-desc2');
var savedCovers = [];
var currentCover = {};

window.addEventListener('load', showRandomCover);
randomCvrBtn.addEventListener('click', showRandomCover);
customCvrBtn.addEventListener('click', showFormView);
viewCoversBtn.addEventListener('click', viewSavedCovers);
homeBtn.addEventListener('click', showHomeView);
makeBookBtn.addEventListener('click', createNewCover);
saveCvrBtn.addEventListener('click', saveCover);

function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverTagLine1.innerText = descriptors[getRandomIndex(descriptors)];
  coverTagLine2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, coverTagLine1.innerText, coverTagLine2.innerText);
}

function showFormView() {
  homeView.classList.add('hidden');
  saveCvrBtn.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
  savedCoversView.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  customFormView.classList.remove('hidden');
}

function viewSavedCovers() {
  homeView.classList.add('hidden');
  customFormView.classList.add('hidden');
  saveCvrBtn.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
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
      </section>`;
    }
}

function showHomeView() {
  customFormView.classList.add('hidden');
  homeBtn.classList.add('hidden');
  savedCoversView.classList.add('hidden');
  homeView.classList.remove('hidden');
  saveCvrBtn.classList.remove('hidden');
  randomCvrBtn.classList.remove('hidden');
}

function createNewCover() {
  coverImage.src = inputCover.value;
  coverTitle.innerText = inputTitle.value;
  coverTagLine1.innerText = inputFirstDesc.value;
  coverTagLine2.innerText = inputSecondDesc.value;
  currentCover = new Cover(coverImage.src, coverTitle.innerText, coverTagLine1.innerText, coverTagLine2.innerText);
  event.preventDefault();
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputFirstDesc.value);
  descriptors.push(inputSecondDesc.value);
  showHomeView();
  document.querySelector('form').reset();
}

function saveCover() {
  if(!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
