// const ratingBubbles = document.querySelectorAll('.rating-bubble');
// ratingBubbles.forEach(bubble => {
//     bubble.addEventListener('click', function () {
//       ratingBubbles.forEach(otherBubble => {
//         if (otherBubble !== bubble) {
//           otherBubble.classList.remove('active');
//         }
//       });
//       this.classList.toggle('active');
//     });
//   });


    const ratingForm = document.getElementById('ratingForm');
    const thankYouSection = document.querySelector('.thank-you-card');
  
    ratingForm.addEventListener('submit', function (submission) {
      submission.preventDefault();
      // Hide the form and show the thank-you section
      ratingForm.style.display = 'none';
      thankYouSection.style.display = 'block';
  
      //update the selected rating in the thank-you section
      const selectedRating = document.querySelector('.selected-rating .user-rating');
      // const userRating = document.querySelector('.rating-bubble.active input').value;
      const checkedRadio = document.querySelector('input.rating-btn:checked');

      if (checkedRadio) {
      selectedRating.textContent = checkedRadio.value;
       }
    });

  