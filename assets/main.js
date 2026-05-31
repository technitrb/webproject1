
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const search = document.querySelector('#program-search');
if (search) {
  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase();
    document.querySelectorAll('.program-card[data-topic]').forEach((card) => {
      const haystack = `${card.dataset.topic} ${card.textContent}`.toLowerCase();
      card.hidden = Boolean(term && !haystack.includes(term));
    });
  });
}

document.querySelectorAll('.lead-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) {
      note.textContent = 'Danke! Ihre Anfrage zur kostenlosen KI-Karriereberatung wurde vorgemerkt.';
    }
  });
});
