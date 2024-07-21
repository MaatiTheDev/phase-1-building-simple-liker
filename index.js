const likeHeart = document.querySelector('.like-heart');
const errorModal = document.getElementById('errorModal');

// Hide error modal initially
errorModal.classList.add('hidden');

likeHeart.addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      // Server returns success
      likeHeart.classList.add('activated-heart');
      likeHeart.classList.toggle('empty');
    })
    .catch(() => {
      // Server returns failure
      errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

// Function to mimic server call (provided)
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve("Success");
      } else {
        reject("Error");
      }
    }, 1000);
  });
}
