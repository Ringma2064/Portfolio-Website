document.addEventListener('DOMContentLoaded', function() {
    // Get all member cards
    const memberCards = document.querySelectorAll('.member-card');
    
    // Get all detail overlays
    const detailOverlays = document.querySelectorAll('.detail-overlay');
    
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    
    // Add click event to each member card
    memberCards.forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member');
            const detailOverlay = document.getElementById(`detail-${memberId}`);
            
            // Show the corresponding detail overlay
            detailOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Add click event to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const overlay = this.closest('.detail-overlay');
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    });
    
    // Close overlay when clicking outside the detail container
    detailOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    });
    
    // Handle form submissions
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! It has been sent successfully.');
            this.reset();
        });
    });
});