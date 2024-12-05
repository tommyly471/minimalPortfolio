document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalIframe = document.querySelector(".modal-iframe");
    const closeModalBtn = document.querySelector(".close-btn");
    const projectCards = document.querySelectorAll(".project-card");

    // Open modal and load project detail
    projectCards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            const projectUrl = card.getAttribute("data-project");
            modalIframe.src = projectUrl;
            modal.style.display = "block";
        });
    });

    // Close modal
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modalIframe.src = ""; // Clear iframe content
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalIframe.src = ""; // Clear iframe content
        }
    });
});
