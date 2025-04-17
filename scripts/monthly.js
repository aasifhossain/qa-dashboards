async function showMonthlyGraph (projectName) {
  const monthSelected = document.getElementById('month-select').value
  const graphContainer = document.getElementById('graph-container')

  // Generate random counts for demonstration
  const totalTestCases = Math.floor(Math.random() * 1000) + 100 // Random between 100 and 1100
  const automatedTestCases = Math.floor(Math.random() * totalTestCases) // Random less than totalTestCases

  // Clear the graph container and add a new canvas
  graphContainer.innerHTML = `<canvas id="barChart"></canvas>`
  const canvas = document.getElementById('barChart')

  // Set the canvas to take up the full size of the parent
  canvas.style.width = '100%'
  canvas.style.height = '100%'

  // Create the bar chart using Chart.js
  new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Total Test Cases', 'Automated Test Cases'],
      datasets: [
        {
          label: `${projectName} - ${monthSelected}`,
          data: [totalTestCases, automatedTestCases],
          backgroundColor: ['#4CAF50', '#2196F3'], // Colors for the bars
          borderColor: ['#388E3C', '#1976D2'], // Border colors
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true, // Ensures the chart resizes with the parent
      maintainAspectRatio: false, // Allows the chart to fill the parent container
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}
