function loadComponent(component, elementId) {
    fetch(component)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error("Error loading component:", error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("assets/components/header.html", "header");
    loadComponent("assets/components/footer.html", "footer");
});