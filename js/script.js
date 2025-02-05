// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Highlight Active Section in Navigation
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeId = entry.target.id;
      navLinks.forEach(link => {
        if (link.getAttribute('href').slice(1) === activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Scroll-triggered Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const animateOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      animateOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(element => {
  animateOnScroll.observe(element);
});
