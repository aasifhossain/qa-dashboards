// Function to check permission
function checkPermission() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (01-12)
    const dd = String(today.getDate()).padStart(2, '0'); // Day (01-31)
    const yyyy = today.getFullYear(); // Year (e.g., 2025)
    const correctDate = mm + dd + yyyy; // Format: mmddyyyy

    const userInput = prompt("Enter password to access the page:");
    if (userInput !== correctDate) {
        alert("Access Denied! Invalid password.");
        document.body.innerHTML = "<h1>Access Denied</h1>";
    }
}

// Run the permission check when the page loads
// window.onload = checkPermission;