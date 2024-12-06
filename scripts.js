document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalIframe = modal.querySelector(".modal-iframe");
    const closeModalBtn = modal.querySelector(".close-btn");
    const projectCards = document.querySelectorAll(".project-card");

    // Utility function to open the modal
    function openModal(projectUrl) {
        modalIframe.src = projectUrl;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    // Utility function to close the modal
    function closeModal() {
        modal.style.display = "none";
        modalIframe.src = "";
        document.body.style.overflow = "";
    }

    // Add click event listeners to project cards
    projectCards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            const projectUrl = card.dataset.project; 
            openModal(projectUrl);
        });
    });

    // Close modal when the close button is clicked
    closeModalBtn.addEventListener("click", closeModal);

    // Close modal when clicking outside the content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
