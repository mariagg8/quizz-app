//toggle Answer
export function toggleText() {
  const answerToggle = document.querySelector('[data-js="btn-answer"]');
  const textAnswer = document.querySelector('[data-js="textAnswer"]');

  answerToggle.addEventListener('click', () => {
    // console.log('i was clicked');
    textAnswer.classList.toggle('show');
  });
}
