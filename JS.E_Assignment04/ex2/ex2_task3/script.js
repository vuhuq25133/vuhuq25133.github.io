const names = ['Ty', 'Suu', 'Dan', 'Mao', 'Thin', 'Ty', 'Ngo', 'Mui', 'Than', 'Dau', 'Tuat', 'Hoi'];

const para = document.getElementById('name-paragraph');
const rerunBtn = document.getElementById('rerun-btn');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseName(array) {
  const randomIndex = random(0, array.length - 1);
  const selectedName = array[randomIndex];
  para.textContent = selectedName;
}
chooseName(names);

rerunBtn.addEventListener('click', () => chooseName(names));
