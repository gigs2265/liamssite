document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  if (!toggle) return;

  const bar  = toggle.closest('.button-bar');
  const menu = document.getElementById('mainNav');
  if (!bar || !menu) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = bar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    console.log('menu toggled:', isOpen); 
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      bar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('click', (e) => {
    if (!bar.contains(e.target)) {
      bar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      bar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}); 
document.addEventListener('DOMContentLoaded', () => {
  const tooltips = document.querySelectorAll('.tooltip');

  tooltips.forEach(tip => {
    const text = tip.querySelector('.tooltip-text');

    tip.addEventListener('click', (e) => {
      e.stopPropagation();

      
      const isVisible = text.classList.toggle('visible');

     
      document.querySelectorAll('.tooltip-text.visible').forEach(other => {
        if (other !== text) other.classList.remove('visible');
      });
    });
  });

 
  document.addEventListener('click', () => {
    document.querySelectorAll('.tooltip-text.visible').forEach(text => {
      text.classList.remove('visible');
    });
  });
});







