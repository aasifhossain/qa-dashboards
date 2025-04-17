// import {fetchData} from './utility.js';

async function fetchData (monthName, appName, columnNumber, year = 2025) {
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
          return columns[columnNumber] // Return the desired column value
        }
      }
      return null // Return null if no matching appName is found
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`)
      return null
    }
  }
  
  async function showMonthlyGraph (projectName) {
    const monthSelected = document.getElementById('month-select').value;
    const graphContainer = document.getElementById('graph-container');
    if (projectName && monthSelected) {
      const owner = await fetchData(monthSelected, projectName, 1)
  
      console.log(`Owner Name: ${owner}`)
      graphContainer.innerHTML = `<h2>${projectName} by ${owner}</h2><p>Graph for ${monthSelected} will be displayed here.</p>`
    }
  }
  