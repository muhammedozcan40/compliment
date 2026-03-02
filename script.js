// script.js — Ezgi'ye tıklanınca iltifat + konfeti

const ILTIFATLAR = [
  'Çok hoşsun! 💕',
  'Çok güzelsin! ✨',
  'Gözlerin çok güzel! 👀',
  'Mükemmelsin! 🌟',
  'Çok tatlısın! 🍬',
  'Çok hoşuma gidiyorsun! 💖',
  'Harikasın! 🎉',
  'Eşsizsin! 💫',
  'Nasıl oldun kendini toparlayabildin mi? 👑',
  'İnanılmaz güzelsin! 😍',
  'Kalbin kadar güzelsin! 💗',
  'Her şeyin çok güzel! 🌸',
  'Dünyanın en zeki ergoterapisti ❤️',
  'Gülüşün dünyayı aydınlatıyor! ☀️',
  'Çok özelsin! 🦋',
  'Muhteşemsin! 👑',
  'Gözlerine hayranım! 👑',
  'İşyerinde en güzel olmak nasıl bir duygu? 👑',
  'Hayat seninle daha güzel hissettiriyor 👑'
];

const photo = document.getElementById('photo');
const complimentEl = document.getElementById('compliment');

function rastgeleIltifat() {
  return ILTIFATLAR[Math.floor(Math.random() * ILTIFATLAR.length)];
}

function konfetiPatlat() {
  if (typeof confetti !== 'function') return;
  const renkler = ['#ff9ed2', '#ffb6c1', '#ff69b4', '#ffc0cb', '#ffd700', '#ffec8b'];
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: renkler,
  });
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: renkler,
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: renkler,
    });
  }, 200);
}

function iltifatGoster() {
  complimentEl.textContent = rastgeleIltifat();
  complimentEl.classList.remove('hidden');
  konfetiPatlat();
  setTimeout(() => {
    complimentEl.classList.add('hidden');
  }, 2500);
}

photo.addEventListener('click', iltifatGoster);
