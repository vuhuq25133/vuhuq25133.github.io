const imageContainer = document.querySelector('#image-container');
const backBtn = document.querySelector('#back-btn');
const nextBtn = document.querySelector('#next-btn');

const images = ['./images/husky1.png', './images/husky2.png', './images/husky3.png'];
let index = 0;

function renderImage() {
  imageContainer.innerHTML = `<img src="${images[index]}" alt="Husky No. ${index + 1}">`;
}

renderImage();
