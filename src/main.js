export const friendName = 'Bhuvi';

export const reasons = [
  'You made ordinary days feel like tiny festivals.',
  'You listened to the messy chapters and still chose to stay.',
  'Your laugh is my favorite notification from the universe.',
  'You are proof that family can begin as friendship.',
  'From my first real friend to my forever one, you are irreplaceable.'
];

export const letterParagraphs = [
  'Happy Friendship Day, my one and only, my very first friend, and the friend I hope life lets me keep until the very last page.',
  'You are not just a memory I smile at; you are a safe place I carry with me. Every silly joke, every late conversation, every little act of care has become a beautiful part of who I am.',
  'If friendship had a crown, I would place it on you with both hands. If gratitude had a voice, it would say your name again and again.',
  'Thank you for being the kind of person who makes hearts lighter. Today is for you, for us, and for the bond I never want to lose.'
];

export const wishes = [
  'May every dream that makes your eyes shine find its way to you.',
  'May your smile be protected on hard days and celebrated on happy ones.',
  'May our friendship keep collecting stories that become our favorite treasures.',
  'May you always feel how deeply you are valued, chosen, and loved as a friend.'
];

let wishIndex = 0;

function createFloatingHearts() {
  const container = document.querySelector('.floating-hearts');
  if (!container) return;
  container.innerHTML = Array.from({ length: 16 }, (_, index) => (
    `<span style="--delay: ${index * 0.45}s; --left: ${6 + index * 6}%">♥</span>`
  )).join('');
}

function renderContent() {
  document.querySelector('#friend-name-heading').textContent = friendName;
  document.querySelector('#letter-copy').innerHTML = letterParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');
  document.querySelector('#reason-list').innerHTML = reasons.map((reason) => `<li>${reason}</li>`).join('');
  document.querySelector('#wish-copy').textContent = wishes[wishIndex % wishes.length];
}

function sprinkleConfetti() {
  const colors = ['#ff4f9a', '#8a4dff', '#ffd86f', '#ffffff'];
  for (let index = 0; index < 36; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--x', `${Math.random() * 100}vw`);
    piece.style.setProperty('--delay', `${Math.random() * 0.35}s`);
    piece.style.background = colors[index % colors.length];
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

function setupInteractions() {
  const surpriseGrid = document.querySelector('#surprise-grid');
  document.querySelector('#open-surprise').addEventListener('click', () => {
    surpriseGrid.hidden = false;
    surpriseGrid.classList.add('is-visible');
    sprinkleConfetti();
    surpriseGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelector('#next-wish').addEventListener('click', () => {
    wishIndex += 1;
    document.querySelector('#wish-copy').textContent = wishes[wishIndex % wishes.length];
    sprinkleConfetti();
  });
}

if (typeof document !== 'undefined') {
  createFloatingHearts();
  renderContent();
  setupInteractions();
}
