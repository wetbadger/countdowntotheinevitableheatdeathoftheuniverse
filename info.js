// Select the elements
const importantInfo = document.getElementById('important-info');
const toggleBar = document.getElementById('toggle-bar');

// Add event listener to the toggle bar
toggleBar.addEventListener('click', () => {
  // Toggle the 'hidden' class
  importantInfo.classList.toggle('hidden');
});

// Select the elements
const infoDiv = document.querySelector('#important-info .info');
const linkElement = document.querySelector('#important-info > a');

// Array of objects with background image URLs and corresponding links
const contentArray = [
  { url: 'info/info1.png', link: 'https://link1.com' },
  { url: 'info/info2.png', link: 'https://link2.com' },
  { url: 'info/info3.png', link: 'https://link3.com' },
  // Add more entries as needed
];

// Set the initial index
let currentIndex = 0;

// Function to change both the background image and link
function updateContent() {
  // Get the current content object
  const currentContent = contentArray[currentIndex];

  // Update the background image
  infoDiv.style.backgroundImage = `url('${currentContent.url}')`;

  // Update the link
  linkElement.href = currentContent.link;

  // Move to the next item, looping back to the start if necessary
  currentIndex = (currentIndex + 1) % contentArray.length;
}

// Change the background image and link every 10 seconds (10000 milliseconds)
setInterval(updateContent, 10000);

// Initial call to set the first background image and link
updateContent();