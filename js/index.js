const containers = document.querySelectorAll('.imageContainer');

containers.forEach((container) => {
  const image = container.querySelector('.image');
  const overlay = container.querySelector('.overlay');
  const knowMore = container.querySelector('.know-more');

  container.addEventListener('mouseenter', () => {
    image.classList.add('image-hovered');
    overlay.classList.add('image-overlay');
    knowMore.classList.add('know-more-visible');
  });

  container.addEventListener('mouseleave', () => {
    image.classList.remove('image-hovered');
    overlay.classList.remove('image-overlay');
    knowMore.classList.remove('know-more-visible');
  });
});
