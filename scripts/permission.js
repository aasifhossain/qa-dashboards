// Function to check permission
function checkPermission () {
  const today = new Date()
  const mm = String(today.getMonth() + 1).padStart(2, '0') // Month (01-12)
  const dd = String(today.getDate()).padStart(2, '0') // Day (01-31)
  const yyyy = today.getFullYear() // Year (e.g., 2025)
  const correctDate = mm + dd + yyyy // Format: mmddyyyy

  // Create a custom modal for password input
  const modal = document.createElement('div')
  modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;">
            <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                <h2>Enter Password</h2>
                <input type="password" id="password-input" placeholder="Enter password" style="padding: 10px; width: 100%; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;">
                <button id="submit-password" style="padding: 10px 10px; background:rgb(66, 3, 183); color: white; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
            </div>
        </div>
    `
  document.body.appendChild(modal)

  // Add event listener to the submit button
  document.getElementById('submit-password').addEventListener('click', () => {
    const userInput = document.getElementById('password-input').value
    if (userInput !== correctDate) {
      alert('Access Denied! Invalid password.')
      document.body.innerHTML = '<h1>Access Denied</h1>'
    } else {
      modal.remove() // Remove the modal if the password is correct
    }
  })
}
// Run the permission check when the page loads
window.onload = checkPermission
