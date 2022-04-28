//Show Answer in all card
export default function toggleAnswer() {
  const cards = document.querySelectorAll('[data-js="card"]');
  cards.forEach(card => {
    const answerToggle = card.querySelector('[data-js="btn-answer"]');
    const textAnswer = card.querySelector('[data-js="textAnswer"]');
    answerToggle.addEventListener('click', () => {
      textAnswer.classList.toggle('hide');
      console.log('click');
    });
  });
}
