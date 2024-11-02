function openPopup(title, description, imageUrl) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-image").src = imageUrl;
    document.getElementById("popup-overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
}
