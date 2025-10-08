const params = new URLSearchParams(window.location.search);
const reviewDetails = document.querySelector('#reviewDetails');

const product = params.get('product');
const rating = params.get('rating');
const installDate = params.get('installDate');
const features = params.getAll('features'); // multiple checkboxes
const review = params.get('review');
const username = params.get('username');

// Display the review details on the page
reviewDetails.innerHTML = `
  <p><strong>Product ID:</strong> ${product}</p>
  <p><strong>Rating:</strong> ${rating} stars</p>
  <p><strong>Installation Date:</strong> ${installDate}</p>
  <p><strong>Features:</strong> ${features.join(', ')}</p>
  <p><strong>Review:</strong> ${review}</p>
  <p><strong>Submitted by:</strong> ${username}</p>
`;

// Update and display the review count using localStorage
let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount++;

localStorage.setItem('reviewCount', reviewCount);
document.querySelector('#counter').textContent = `Reviews submitted: ${reviewCount}`;
