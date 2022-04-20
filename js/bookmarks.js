import { bookmarkToggle } from './selectors.js';

//Bookmark toggle

bookmarkToggle.addEventListener('click', () => {
  bookmarkToggle.classList.toggle('bookmark-icon-active');
});
