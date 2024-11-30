document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const iframe = document.querySelector('.modal-iframe');
    const closeBtn = document.querySelector('.close-btn');

    // Add click event to project links
    document.querySelectorAll('.project-card').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            iframe.src = href; // Set iframe source to the link's href
            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close modal on close button click
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        iframe.src = ''; // Clear iframe source
    });

    // Close modal on clicking outside modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            iframe.src = ''; // Clear iframe source
        }
    });
});
