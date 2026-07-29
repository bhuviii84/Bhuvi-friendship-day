export const friendName = 'Bhuvi';

export const reasons = [
  'You made ordinary days feel like tiny festivals.',
  'You listened to the messy chapters and still chose to stay.',
  'Your laugh is my favorite notification from the universe.',
  'You are proof that family can begin as friendship.',
  'From my first real friend to my forever one, you are irreplaceable.',
  'You turn simple moments into memories I want to replay.'
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
  'May you always feel how deeply you are valued, chosen, and loved as a friend.',
  'May every tomorrow bring you a new reason to say, I am happy.'
];

export const surprisePages = [
  {
    icon: '💌',
    title: 'A letter for you',
    type: 'paragraphs',
    content: letterParagraphs
  },
  {
    icon: '💖',
    title: 'Why you are priceless',
    type: 'list',
    content: reasons
  },
  {
    icon: '⭐',
    title: 'Wishes just for you',
    type: 'list',
    content: wishes
  },
  {
    icon: '😊',
    title: 'Smile gallery',
    type: 'emoji',
    content: ['😊', '😄', '🥰', '🤗', '😁', '💫', '💝', '💞']
  },
  {
    icon: '♾️',
    title: 'My promise',
    type: 'paragraphs',
    content: [
      'No matter how life changes, I will always cheer for you, remember you, and keep a special place in my heart labeled: Bhuvi, the beginning of my best friendships.',
      'Whenever you open this page, imagine a shower of hearts, sparkles, and smiles saying: you matter so much.'
    ]
  }
];

let activePage = -1;

function createFloatingHearts() {
  const container = document.querySelector('.floating-hearts');
  if (!container) return;
  const symbols = ['♥', '💗', '💖', '😊', '💛', '✨', '🥰', '💞'];
  container.innerHTML = Array.from({ length: 34 }, (_, index) => (
    `<span style="--delay: ${index * 0.28}s; --left: ${3 + (index * 11) % 94}%; --size: ${1 + (index % 5) * 0.25}rem">${symbols[index % symbols.length]}</span>`
  )).join('');
}

function createEmojiRain() {
  const container = document.querySelector('.emoji-rain');
  if (!container) return;
  const symbols = ['😊', '💖', '💛', '💕', '😄', '✨', '💝', '🌟'];
  container.innerHTML = Array.from({ length: 28 }, (_, index) => (
    `<span style="--delay: ${index * 0.5}s; --left: ${(index * 17) % 100}%; --duration: ${8 + (index % 6)}s">${symbols[index % symbols.length]}</span>`
  )).join('');
}

function renderPageContent(page) {
  if (page.type === 'list') {
    return `<ul class="sparkle-list">${page.content.map((item) => `<li>${item}</li>`).join('')}</ul>`;
  }
  if (page.type === 'emoji') {
    return `<div class="smile-gallery">${page.content.map((item) => `<span>${item}</span>`).join('')}</div><p class="big-note">A whole bunch of happy faces because your friendship deserves endless smiles.</p>`;
  }
  return page.content.map((paragraph) => `<p>${paragraph}</p>`).join('');
}

function renderStoryPages() {
  const stage = document.querySelector('#story-stage');
  if (!stage) return;
  stage.innerHTML = surprisePages.map((page, index) => `
    <article class="page-card story-card" data-page="${index}" hidden>
      <div class="section-title">${page.icon} ${page.title}</div>
      <div class="page-content">${renderPageContent(page)}</div>
      <div class="page-footer">
        <span class="page-count">Page ${index + 1} of ${surprisePages.length}</span>
        <button class="secondary-action next-page" type="button">${index === surprisePages.length - 1 ? 'Replay happiness 😊' : 'Next page 💕'}</button>
      </div>
    </article>
  `).join('');
}

function showPage(nextIndex) {
  document.querySelector('#hero-page')?.classList.toggle('is-active', nextIndex === -1);
  document.querySelector('#hero-page')?.toggleAttribute('hidden', nextIndex !== -1);
  document.querySelectorAll('.story-card').forEach((card, index) => {
    const isActive = index === nextIndex;
    card.toggleAttribute('hidden', !isActive);
    card.classList.toggle('is-active', isActive);
  });
  activePage = nextIndex;
  sparkleBurst();
}

export function sparkleBurst() {
  const colors = ['#ff4f9a', '#8a4dff', '#ffd86f', '#ffffff', '#ff8cc8'];
  for (let index = 0; index < 44; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = index % 5 === 0 ? '😊' : index % 3 === 0 ? '💖' : '';
    piece.style.setProperty('--x', `${Math.random() * 100}vw`);
    piece.style.setProperty('--delay', `${Math.random() * 0.35}s`);
    piece.style.background = piece.textContent ? 'transparent' : colors[index % colors.length];
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

function setupInteractions() {
  document.querySelectorAll('.next-page').forEach((button) => {
    button.addEventListener('click', () => {
      const nextIndex = activePage + 1 >= surprisePages.length ? -1 : activePage + 1;
      showPage(nextIndex);
      document.querySelector('.page-card.is-active')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

function renderContent() {
  document.querySelector('#friend-name-heading').textContent = friendName;
  renderStoryPages();
}

if (typeof document !== 'undefined') {
  createFloatingHearts();
  createEmojiRain();
  renderContent();
  setupInteractions();
}
