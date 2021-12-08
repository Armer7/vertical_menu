const menuLinks = document.querySelectorAll('.nav > li > a');

menuLinks.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains('active')) {
      target.classList.remove('active');
    } else {
      const openSubmenu = document.querySelector('.active');
      if (openSubmenu) {
        openSubmenu.classList.remove('active');
      }
      target.classList.add('active');
    }
  });
});
