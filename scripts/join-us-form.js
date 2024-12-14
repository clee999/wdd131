// Get form and feedback elements
const formElement = document.querySelector('.join-form');
const feedbackElement = document.createElement('div'); // Create feedback div dynamically
feedbackElement.style.display = 'none'; // Initially hide the feedback message
feedbackElement.style.marginTop = '1em';
formElement.appendChild(feedbackElement); // Add feedback element to the form

// Add form submit event listener
formElement.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const firstName = document.getElementById('fname').value.trim();
  const lastName = document.getElementById('lname').value.trim();
  const email = document.getElementById('mail').value.trim();
  const phone = document.getElementById('number').value.trim();

  // Clear previous feedback
  feedbackElement.innerHTML = '';
  feedbackElement.style.color = 'red';

  // Validation checks
  if (!firstName) {
    feedbackElement.innerHTML = 'Please enter your first name.';
    feedbackElement.style.display = 'block';
    return;
  }

  if (!lastName) {
    feedbackElement.innerHTML = 'Please enter your last name.';
    feedbackElement.style.display = 'block';
    return;
  }

  if (!email) {
    feedbackElement.innerHTML = 'Please enter your email address.';
    feedbackElement.style.display = 'block';
    return;
  }

  if (!phone) {
    feedbackElement.innerHTML = 'Please enter your phone number.';
    feedbackElement.style.display = 'block';
    return;
  }

  // Success message
  feedbackElement.innerHTML = `Hello ${firstName}! Thank you for joining Etoofitness. We will contact you shortly.`;
  feedbackElement.style.color = 'white';
  feedbackElement.style.display = 'block'

});

