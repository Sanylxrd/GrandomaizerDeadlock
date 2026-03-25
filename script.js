const characters = [
  { name: "Абрамс", img: "icons/abrams.png" },
  { name: "Бибоп", img: "icons/bebop.png" },
  { name: "Динамо", img: "icons/dynamo.png" },
  { name: "Грей Тэлон", img: "icons/grey_talon.png" },
  { name: "Хейз", img: "icons/haze.png" },
  { name: "Инфернус", img: "icons/infernus.png" },
  { name: "Айви", img: "icons/ivy.png" },
  { name: "Келвин", img: "icons/kelvin.png" },
  { name: "Леди Гайст", img: "icons/lady_geist.png" },
  { name: "Лэш", img: "icons/lash.png" },
  { name: "МакГиннис", img: "icons/mcginnis.png" },
  { name: "Мо и Крилл", img: "icons/mo_krill.png" },
  { name: "Парадокс", img: "icons/paradox.png" },
  { name: "Покет", img: "icons/pocket.png" },
  { name: "Севен", img: "icons/seven.png" },
  { name: "Виндикта", img: "icons/vindicta.png" },
  { name: "Уорден", img: "icons/warden.png" },
  { name: "Рэйф", img: "icons/wraith.png" },
  { name: "Ямато", img: "icons/yamato.png" },
  { name: "Вискос", img: "icons/viscous.png" },
  { name: "Шив", img: "icons/shiv.png" },
  { name: "Мираж", img: "icons/mirage.png" },
  { name: "Калико", img: "icons/calico.png" },
  { name: "Холлидей", img: "icons/holliday.png" },
  { name: "Синклер", img: "icons/sinclair.png" },
  { name: "Вайпер", img: "icons/vyper.png" },
  { name: "Мина", img: "icons/mina.png" },
  { name: "Билли", img: "icons/billy.png" },
  { name: "Зе Дормен", img: "icons/doorman.png" },
  { name: "Пейдж", img: "icons/paige.png" },
  { name: "Дрифтер", img: "icons/drifter.png" },
  { name: "Виктор", img: "icons/victor.png" },
  { name: "Рем", img: "icons/rem.png" },
  { name: "Грейвс", img: "icons/graves.png" },
  { name: "Сильвер", img: "icons/silver.png" },
  { name: "Венатор", img: "icons/venator.png" },
  { name: "Селесте", img: "icons/celeste.png" },
  { name: "Аполло", img: "icons/apollo.png" }
];

function pickRandom() {
  const count = parseInt(document.getElementById('count').value);
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = '';

  let spinInterval = setInterval(() => {
    resultDiv.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const random = characters[Math.floor(Math.random() * characters.length)];

      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<img src="${random.img}"><span>${random.name}</span>`;

      resultDiv.appendChild(div);
    }

  }, 100);

  setTimeout(() => {
    clearInterval(spinInterval);

    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    resultDiv.innerHTML = '';

    selected.forEach((char, index) => {
      const div = document.createElement('div');
      div.className = 'item';

      if (index === 0) {
        div.classList.add('winner'); // первый — главный
      }

      div.innerHTML = `<img src="${char.img}"><span>${char.name}</span>`;
      resultDiv.appendChild(div);
    });

  }, 1200);
}