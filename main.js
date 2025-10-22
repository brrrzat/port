const scrollTopBtn = document.getElementById('scrollTopBtn');
const scrollThreshold = 300; 
window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggleBtn.textContent = document.body.classList.contains('light') ? '🌕' : '🌑';
});

const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
 const expanded = burger.getAttribute('aria-expanded')
=== 'true';
 burger.setAttribute('aria-expanded',
String(!expanded));
 menu.classList.toggle('open');
 });



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const message = document.getElementById("formMessage");
  message.textContent = "Message sent successfully ✅";
  message.style.opacity = "1";
  
  this.reset();

  setTimeout(() => {
    message.style.opacity = "0";
  }, 4000);
});

