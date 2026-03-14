'use strict';

const barBtn = document.querySelector('.barBtn');
const gnbEl = document.querySelector('.gnb');
const snsLinksEl = document.querySelector('.snsLinks');

barBtn.addEventListener('click', (e) => {
  const currentTarget = e.currentTarget;
  currentTarget.classList.toggle('active');

  if (currentTarget.matches('.active')) {
    console.log('active');
    gnbEl.style.display = 'flex';
    snsLinksEl.style.display = 'flex';
  } else {
    gnbEl.style.display = 'none';
    snsLinksEl.style.display = 'none';
  }
});
