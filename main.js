//Bookmark toggle
const bookmarkToggle = document.querySelector('[data-js="bookmark-toggle"]');
bookmarkToggle.addEventListener('click', () => {
  bookmarkToggle.classList.toggle('bookmark-icon-active');
});
