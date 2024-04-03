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

      // Creating Schedule
      if (days < 31){
        const schedule = document.getElementById("schedule");
        schedule.textContent = "Schedule";

        for (let i = 1; i <= days; i++) {
          // Create a new row and cells for the table
          const table = document.getElementById("table-schedule");
          const dayHeading = document.getElementById("day-heading");
          const pageHeading = document.getElementById("page-heading");
          const row = document.createElement("tr");
          const dayCell = document.createElement("td");
          const pageCell = document.createElement("td");
          const tbody = document.querySelector("#table-schedule tbody");
    
          // Populate the cells with the day number and the page number
          dayCell.textContent = `Day ${i}`;
          pageCell.textContent = i * pagesNeeded;
          dayHeading.textContent = "Day";
          pageHeading.textContent = "Pages to Read";
    
          // Append the cells to the row
          row.appendChild(dayCell);
          row.appendChild(pageCell);
    
          // Append the row to the table
          // table.querySelector("tbody").appendChild(row);
          tbody.appendChild(row);
            
          // Adding for the table
          table.style.border = "5px solid rgb(149, 255, 0)";
          dayCell.style.padding = "5px";
          pageCell.style.padding = "5px";
        }
      }
  

    } else {
      // Error Msg
      goalResult.textContent = 'Please enter valid numbers';
    }
});