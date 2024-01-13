const ratingBubbles = document.querySelectorAll('.rating-bubble');
ratingBubbles.forEach(bubble => {
    bubble.addEventListener('click', function () {
      ratingBubbles.forEach(otherBubble => {
        if (otherBubble !== bubble) {
          otherBubble.classList.remove('active');
        }
      });
      this.classList.toggle('active');
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    const ratingForm = document.getElementById('ratingForm');
    const thankYouSection = document.querySelector('.thank-you-card');
    let userRating = 0;
  
    ratingForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Hide the form and show the thank-you section
      ratingForm.style.display = 'none';
      thankYouSection.style.display = 'block';
  
      //update the selected rating in the thank-you section
      const selectedRating = document.querySelector('.selected-rating .user-rating');
      const userRating = document.querySelector('.rating-bubble.active input').value;
      selectedRating.textContent = userRating;
    });
  });
  