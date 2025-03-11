// Simple form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Check email format
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                alert('Please enter a valid email address');
                isValid = false;
            }
            
            // Check message content
            if (messageInput.value.trim().length < 10) {
                alert('Please enter a message with at least 10 characters');
                isValid = false;
            }
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    }
