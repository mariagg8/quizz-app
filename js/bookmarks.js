//Bookmarks for All
export default function toogleBookmarks() {
  const bookmarks = document.querySelectorAll('[data-js="bookmark-toggle"]');

  bookmarks.forEach(bookmarkToggle => {
    bookmarkToggle.addEventListener('click', () => {
      bookmarkToggle.classList.toggle('bookmark-icon-active');
    });
  });
}
