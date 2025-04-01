let counter = 0; // This variable will hold the current counter value.
 const counterDisplay = document.getElementById('counter'); // Select the counter display element.
 
 // Function to increment the counter and update the DOM.
 function updateCounter() {
     counter++;
     counterDisplay.textContent = counter; // Update the counter display.
 }
 
 // Start the timer using setInterval.
 const timer = setInterval(updateCounter, 1000); // Runs updateCounter every 1000ms (1 second).