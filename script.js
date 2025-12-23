const slider = document.getElementById('sliderTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 340, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -340, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.querySelector('.reviews-wrapper');
  const dots = document.querySelectorAll('.dot');
  const cards = document.querySelectorAll('.review-item');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      cards[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest' 
      });
    });
  });

  reviewsContainer.addEventListener('scroll', () => {
    let bestMatchIndex = 0;
    let minDistance = Number.MAX_VALUE;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
      const containerCenter = reviewsContainer.scrollLeft + (reviewsContainer.offsetWidth / 2);
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        bestMatchIndex = index;
      }
    });
    dots.forEach(d => d.classList.remove('active'));
    dots[bestMatchIndex].classList.add('active');
  });
});

function updateMainArticle(element) {

        const newImage = element.querySelector('.art-thumb').src;
        const newTitle = element.querySelector('.art-title').innerText;
        const newAuthorName = element.querySelector('.author-name').innerText;
        const newAvatar = element.querySelector('.avatar-img').src;
        const newTime = element.querySelector('.time-text').innerText;
        const newDesc = element.getAttribute('data-desc');
        const mainImg = document.getElementById('main-img');
        const mainTitle = document.getElementById('main-title');
        const mainDesc = document.getElementById('main-desc');
        const mainAuthor = document.getElementById('main-author');
        const mainAvatar = document.getElementById('main-avatar');
        const mainTime = document.getElementById('main-time');

        mainImg.src = newImage;
        mainTitle.innerText = newTitle;
        mainDesc.innerText = newDesc; 
        mainAuthor.innerText = newAuthorName;
        mainAvatar.src = newAvatar;
        mainTime.innerText = newTime;
    }