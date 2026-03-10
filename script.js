// script.js — İltifat + Fotoğraf eşleştirme (tab menü, eşleşmede ortadaki resim + konfeti)

const ILTIFATLAR = [
  'Çok hoşsun! 💕',
  'Çok güzelsin! ✨',
  'Gözlerin çok güzel! 👀',
  'Mükemmelsin! 🌟',
  'Çok tatlısın! 🍬',
  'Çok hoşuma gidiyorsun! 💖',
  'Harikasın! 🎉',
  'Eşsizsin! 💫',
  'İnanılmaz güzelsin! 😍',
  'Kalbin kadar güzelsin! 💗',
  'Her şeyin çok güzel! 🌸',
  'Dünyanın en zeki ergoterapisti ❤️',
  'Gülüşün dünyayı aydınlatıyor! ☀️',
  'Çok özelsin! 🦋',
  'Muhteşemsin! 👑',
  'Gözlerine hayranım! 👑',
  'İşyerinde en güzel olmak nasıl bir duygu? 👑',
  'Hayat seninle daha güzel hissettiriyor 👑',
  'Nasıl oldun kendini toparlayabildin mi? 👑'
];

const CARD_IMAGES = ['card1.png', 'card2.png', 'card3.png', 'card4.png'];

const photo = document.getElementById('photo');
const complimentEl = document.getElementById('compliment');
const cardsGrid = document.getElementById('cards-grid');
const matchModal = document.getElementById('match-modal');
const matchCountEl = document.getElementById('match-count');

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

// ——— Tab geçişi ———
document.querySelectorAll('.tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    document.querySelectorAll('.tab').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tabId + '-section').classList.add('active');
    if (tabId === 'matching' && !window.matchingGameInitialized) {
      initMatchingGame();
      window.matchingGameInitialized = true;
    }
  });
});

// ——— Fotoğraf eşleştirme oyunu ———
let flippedCards = [];
let lockBoard = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createCard(imageSrc) {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-match', imageSrc);
  card.innerHTML = `
    <div class="card-face card-back">🃏</div>
    <div class="card-face card-front"><img src="${imageSrc}" alt="Kart" /></div>
  `;
  card.addEventListener('click', (e) => {
    e.stopPropagation();
    flipCard(card);
  });
  return card;
}

function flipCard(card) {
  if (lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) return;
  card.classList.add('flipped');
  flippedCards.push(card);
  if (flippedCards.length === 2) {
    lockBoard = true;
    const first = flippedCards[0];
    const second = flippedCards[1];
    const sameElement = first === second;
    const sameImage = first.getAttribute('data-match') === second.getAttribute('data-match');
    const isMatch = !sameElement && sameImage;
    if (isMatch) {
      flippedCards = [];
      lockBoard = false;
      showMatchCelebration(first, second);
    } else {
      setTimeout(() => {
        first.classList.remove('flipped');
        second.classList.remove('flipped');
        flippedCards = [];
        lockBoard = false;
      }, 700);
    }
  }
}

function updateMatchCounter() {
  const matched = document.querySelectorAll('.card.matched').length;
  const remaining = 8 - matched;
  if (matchCountEl) matchCountEl.textContent = remaining;
  return remaining;
}

function goToComplimentTab() {
  document.querySelectorAll('.tab').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
  document.querySelector('.tab[data-tab="compliment"]').classList.add('active');
  document.getElementById('compliment-section').classList.add('active');
  window.matchingGameInitialized = false;
}

function showMatchCelebration(card1, card2) {
  matchModal.classList.remove('hidden');
  setTimeout(() => konfetiPatlat(), 1000);
  setTimeout(() => {
    card1.classList.add('matched');
    card2.classList.add('matched');
    const remaining = updateMatchCounter();
    matchModal.classList.add('hidden');
    if (remaining === 0) {
      setTimeout(() => {
        konfetiPatlat();
        goToComplimentTab();
      }, 400);
    }
  }, 1800);
}

function initMatchingGame() {
  cardsGrid.innerHTML = '';
  if (matchCountEl) matchCountEl.textContent = '8';
  const deck = shuffle([...CARD_IMAGES, ...CARD_IMAGES]);
  deck.forEach((imageSrc) => {
    cardsGrid.appendChild(createCard(imageSrc));
  });
}

photo.addEventListener('click', iltifatGoster);
