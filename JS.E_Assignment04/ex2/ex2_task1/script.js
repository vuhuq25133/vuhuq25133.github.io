const names = ['Ty', 'Suu', 'Dan', 'Mao', 'Thin', 'Ty', 'Ngo', 'Mui', 'Than', 'Dau', 'Tuat', 'Hoi'];

const para = document.getElementById('name-paragraph');

function chooseName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  para.textContent = names[randomIndex];
}

chooseName();
