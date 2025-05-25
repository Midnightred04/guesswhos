const guessBtn = document.getElementById('guessBtn');
const secondBtn = document.getElementById('secondBtn');
const image1 = document.getElementById('image1');
const image2Wrapper = document.getElementById('secondImageWrapper');

guessBtn.addEventListener('click', () => {
  guessBtn.classList.add('hidden');
  image1.classList.remove('hidden');

  setTimeout(() => {
    image1.classList.add('hidden');
    secondBtn.classList.remove('hidden');
  }, 2000);
});

secondBtn.addEventListener('click', () => {
  secondBtn.classList.add('hidden');
  image2Wrapper.classList.remove('hidden');
});

