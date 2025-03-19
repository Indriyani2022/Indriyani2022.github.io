// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the dark mode toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        // Function to update the button text based on current mode
        function updateButtonText() {
            if (document.body.classList.contains('dark-mode')) {
                darkModeToggle.textContent = 'Switch to Light Mode';
            } else {
                darkModeToggle.textContent = 'Switch to Dark Mode';
            }
        }
        
        // Toggle dark mode when the button is clicked
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            updateButtonText();
            
            // Save preference to localStorage so it persists between page loads
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
        
        // Check for saved preference when page loads
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            updateButtonText();
        }
    }
});

