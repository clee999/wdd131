const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


//toggle navigation menu on click

hamButton.addEventListener('click', () => {
     navigation.classList.toggle('show'); // Add or remove the 'show' class
     
     hamButton.textContent = hamButton.textContent === '☰' ? 'X' : '☰';
});


// Display current year
document.getElementById('currentyear').textContent = new Date().getFullYear();
  
// Display last modified date
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;
      
