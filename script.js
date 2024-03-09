let daysNeeded;

function calculateDaysNeeded(pages) {
    daysNeeded = Math.ceil(604 / pages);
}

document.getElementById("pagesPerDay").addEventListener('submit', function(event) {
    event.preventDefault();

    // Values
    const pages = parseInt(document.getElementById("pages").value);
    const result = document.getElementById("result");

    // Checking
    if (!isNaN(pages)) {
        // Calculating
        calculateDaysNeeded(pages);
        
        // Displaying Result
        result.innerHTML = daysNeeded;

      } else {
        // Error Msg
        alert("Please Enter a valid age and/or date");
        result.textContent = 'Please enter valid numbers';
      }
});