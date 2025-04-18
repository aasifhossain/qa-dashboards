async function fetchData (monthName, appName, year = 2025) {
  const filePath = `../data/${monthName}${year}.csv` // Adjust the path if needed
  try {
    const response = await fetch(filePath)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${filePath}: ${response.statusText}`
      )
    }
    const csvData = await response.text()
    const rows = csvData.split('\n') // Split rows by newline
    for (const row of rows) {
      const columns = row.split(',') // Split columns by comma
      if (columns[0].trim() === appName) {
        return columns
      }
    }
    return null // Return null if no matching appName is found
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`)
    return null
  }
}

function displayCharts (projectName) {
  showUIChart(projectName)
  showAPIChart(projectName)
  showZephrChart(projectName)
  showUITable(projectName)
  showAPITable(projectName)
  showZephyrTable(projectName)
}

async function showUIChart (projectName) {
  const monthSelected = document.getElementById('month-select').value
  const graphContainer = document.getElementById('graph-container1')
  if (projectName && monthSelected) {
    // Generate random counts for demonstration
    const dataRow = await fetchData(monthSelected, projectName)
    const ownerName = dataRow[1] // Assuming the owner name is in the second column
    const totalTestCases = dataRow[2] // Random between 100 and 1100
    const automatedTestCases = dataRow[3] // Random less than totalTestCases

    // Clear the graph container and add a new canvas
    graphContainer.innerHTML = `<canvas id="barChart1"></canvas>`
    const canvas = document.getElementById('barChart1')

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
            backgroundColor: ['#6C63FF', '#4CAF50'], // Colors for the bars
            borderColor: ['#5A56E0', '#3E8E41'], // Border colors
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true, // Ensures the chart resizes with the parent
        maintainAspectRatio: true, // Allows the chart to fill the parent container
        plugins: {
          title: {
            display: true,
            text: `Web Application (UI)`,
            font: {
              size: 12,
              family: 'Trebuchet MS',
              weight: 'bold',
              fontStyle: 'italic'
            },
            padding: {
              top: 5,
              bottom: 5
            }
          },
          subtitle: {
            display: true,
            text: `${projectName} - ${monthSelected}`,
            color: 'blue',
            font: {
              size: 12,
              family: 'Trebuchet MS',
              weight: 'normal'
            },
            padding: {
              bottom: 5
            }
          },
          legend: {
            display: false,
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  } else {
    graphContainer.innerHTML = `<h2></h2><p>Now select a project to view the chart.</p>`
  }
}

async function showAPIChart (projectName) {
  const monthSelected = document.getElementById('month-select').value
  const graphContainer = document.getElementById('graph-container2')
  if (projectName && monthSelected) {
    const dataRow = await fetchData(monthSelected, projectName)
    const totalTestCases = dataRow[5]
    const automatedTestCases = dataRow[6]

    // Clear the graph container and add a new canvas
    graphContainer.innerHTML = `<canvas id="barChart2"></canvas>`
    const canvas = document.getElementById('barChart2')

    canvas.style.width = '100%'
    canvas.style.height = '100%'

    new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Total Test Cases', 'Automated Test Cases'],
        datasets: [
          {
            label: `${projectName} - ${monthSelected}`,
            data: [totalTestCases, automatedTestCases],
            backgroundColor: ['#FFB74D', '#29B6F6'], // Colors for the bars
            borderColor: ['#FFA726', '#0288D1'], // Border colors
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true, // Ensures the chart resizes with the parent
        maintainAspectRatio: true, // Allows the chart to fill the parent container
        plugins: {
          title: {
            display: true,
            text: `Application Programming Interface (API)`,
            font: {
              size: 12,
              family: 'Trebuchet MS',
              weight: 'bold',
              fontStyle: 'italic'
            },
            padding: {
              top: 5,
              bottom: 5
            }
          },
          subtitle: {
            display: true,
            text: `${projectName} - ${monthSelected}`,
            color: 'blue',
            font: {
              size: 12,
              family: 'Trebuchet MS',
              weight: 'normal'
            },
            padding: {
              bottom: 5
            }
          },
          legend: {
            display: false,
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  } else {
    graphContainer.innerHTML = `<h2></h2><p>Now select a project to view the chart.</p>`
  }
}
async function showZephrChart (projectName) {
  const monthSelected = document.getElementById('month-select').value
  const graphContainer = document.getElementById('graph-container3')
  if (projectName && monthSelected) {
    // Generate random counts for demonstration
    const dataRow = await fetchData(monthSelected, projectName)
    const uploaded = dataRow[8] // Assuming the owner name is in the second column
    const executed = dataRow[9] // Random between 100 and 1100
    const defects = dataRow[10] // Random less than totalTestCases

    // Clear the graph container and add a new canvas
    graphContainer.innerHTML = `<canvas id="barChart3"></canvas>`
    const canvas = document.getElementById('barChart3')

    // Set the canvas to take up the full size of the parent
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    // Create the bar chart using Chart.js
    new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Uploaded', 'Executed', 'Defects'],
        datasets: [
          {
            label: `${projectName} - ${monthSelected}`,
            data: [uploaded, executed, defects],
            backgroundColor: ['#81C784', '#64B5F6', '#E57373'], // Colors for the bars
            borderColor: ['#66BB6A', '#42A5F5', '#EF5350'], // Border colors
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true, // Ensures the chart resizes with the parent
        maintainAspectRatio: true, // Allows the chart to fill the parent container
        plugins: {
          title: {
            display: true,
            text: `Zephyr Status`,
            font: {
              size: 12,
              family: 'Trebuchet MS',
              weight: 'bold',
              fontStyle: 'italic'
            },
            padding: {
              top: 5,
              bottom: 5
            }
          },
          subtitle: {
            display: true,
            text: `${projectName} - ${monthSelected}`,
            color: 'blue',
            font: {
              size: 12,
              family: 'Trebuchet MS',
              weight: 'normal'
            },
            padding: {
              bottom: 5
            }
          },
          legend: {
            display: false,
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  } else {
    graphContainer.innerHTML = `<h2></h2><p>Now select a project to view the chart.</p>`
  }
}

async function showUITable(projectName) {
  const monthSelected = document.getElementById('month-select').value;
  const graphContainer = document.getElementById('graph-container4'); // Assuming this is the container for the table

  if (projectName && monthSelected) {
    // Fetch data for the selected project and month
    const dataRow = await fetchData(monthSelected, projectName);
    const totalTestCases = dataRow[2]; // Assuming total test cases are in the 3rd column
    const automatedTestCases = dataRow[3]; // Assuming automated test cases are in the 4th column

    // Clear the container and add a table
    graphContainer.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
            <th style="padding: 20px; border: 1px solid #ddd;">Metric</th>
            <th style="padding: 20px; border: 1px solid #ddd;">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 20px; border: 1px solid #ddd;">Total Test Cases</td>
            <td style="padding: 20px; border: 1px solid #ddd;">${totalTestCases}</td>
          </tr>
          <tr>
            <td style="padding: 20px; border: 1px solid #ddd;">Automated Test Cases</td>
            <td style="padding: 20px; border: 1px solid #ddd;">${automatedTestCases}</td>
          </tr>
        </tbody>
      </table>
    `;
  } else {
    graphContainer.innerHTML = `<p>Please select a project to view the table.</p>`;
  }
}
async function showAPITable(projectName) {
  const monthSelected = document.getElementById('month-select').value;
  const graphContainer = document.getElementById('graph-container5'); // Assuming this is the container for the table

  if (projectName && monthSelected) {
    // Fetch data for the selected project and month
    const dataRow = await fetchData(monthSelected, projectName);
    const totalTestCases = dataRow[5]; // Assuming total test cases are in the 3rd column
    const automatedTestCases = dataRow[6]; // Assuming automated test cases are in the 4th column

    // Clear the container and add a table
    graphContainer.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
            <th style="padding: 20px; border: 1px solid #ddd;">Metric</th>
            <th style="padding: 20px; border: 1px solid #ddd;">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 20px; border: 1px solid #ddd;">Total Test Cases</td>
            <td style="padding: 20px; border: 1px solid #ddd;">${totalTestCases}</td>
          </tr>
          <tr>
            <td style="padding: 20px; border: 1px solid #ddd;">Automated Test Cases</td>
            <td style="padding: 20px; border: 1px solid #ddd;">${automatedTestCases}</td>
          </tr>
        </tbody>
      </table>
    `;
  } else {
    graphContainer.innerHTML = `<p>Please select a project to view the table.</p>`;
  }
}

async function showZephyrTable(projectName) {
  const monthSelected = document.getElementById('month-select').value;
  const graphContainer = document.getElementById('graph-container6'); // Assuming this is the container for the table

  if (projectName && monthSelected) {
    // Fetch data for the selected project and month
    const dataRow = await fetchData(monthSelected, projectName);
    const uploaded = dataRow[8]; // Assuming uploaded is in the 9th column
    const executed = dataRow[9]; // Assuming executed is in the 10th column
    const defects = dataRow[10]; // Assuming defects are in the 11th column

    // Clear the container and add a table
    graphContainer.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
            <th style="padding: 15px; border: 1px solid #ddd;">Metric</th>
            <th style="padding: 15px; border: 1px solid #ddd;">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 15px; border: 1px solid #ddd;">Uploaded Test Cases</td>
            <td style="padding: 15px; border: 1px solid #ddd;">${uploaded}</td>
          </tr>
          <tr>
            <td style="padding: 15px; border: 1px solid #ddd;">Executed Test Cases</td>
            <td style="padding: 15px; border: 1px solid #ddd;">${executed}</td>
          </tr>
          <tr>
            <td style="padding: 15px; border: 1px solid #ddd;">Defects Logged</td>
            <td style="padding: 15px; border: 1px solid #ddd;">${defects}</td>
          </tr>
        </tbody>
      </table>
    `;
  } else {
    graphContainer.innerHTML = `<p>Please select a project to view the table.</p>`;
  }
}