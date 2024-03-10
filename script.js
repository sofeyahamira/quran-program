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
        result.innerHTML = `It will take you ${daysNeeded} days to khatm the Quran`;

      } else {
        // Error Msg
        result.textContent = 'Please enter valid numbers';
      }
});

// for dayGoal
let pagesNeeded;
function calculatePagesNeeded(days) {
  pagesNeeded = Math.ceil(604 / days);
}

document.getElementById("dayGoal").addEventListener('submit', function(event) {
  event.preventDefault();

  // Values
  const days = parseInt(document.getElementById("days").value);
  const goalResult = document.getElementById("goalResult");

  // Checking
  if (!isNaN(days)) {
      // Calculating
      calculatePagesNeeded(days);
      
      // Displaying Result
      goalResult.innerHTML = `You need to read ${pagesNeeded} pages per day`;

    } else {
      // Error Msg
      goalResult.textContent = 'Please enter valid numbers';
    }
});