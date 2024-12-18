document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".fas.fa-bars");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.style.display = navbar.style.display === "block" ? "none" : "block";
    });

    // Close the navbar when clicking outside
    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
            navbar.style.display = "none";
        }
    });
});
