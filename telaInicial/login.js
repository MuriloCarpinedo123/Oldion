const links = document.querySelectorAll('.link-transicao');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location = this.getAttribute('data-href');
    }, 500);
  });
});
