const menuBtn = document.querySelector('#menuBtn');
const navbar = document.querySelector('#navbar');
const themeBtn = document.querySelector('#themeBtn');
const toTop = document.querySelector('#toTop');
const trialForm = document.querySelector('.trial-form');

const savedTheme = localStorage.getItem('pipeline-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeBtn.innerHTML = '<i class="ri-sun-line"></i>';
}

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  const icon = navbar.classList.contains('active') ? 'ri-close-line' : 'ri-menu-3-line';
  menuBtn.innerHTML = `<i class="${icon}"></i>`;
});

navbar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
  });
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('pipeline-theme', isDark ? 'dark' : 'light');
  themeBtn.innerHTML = isDark ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 550) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

trialForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = trialForm.querySelector('input').value.trim();

  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  alert('Thanks! Your free trial request has been received.');
  trialForm.reset();
});
