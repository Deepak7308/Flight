document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Dynamic greeting based on the time of day
    function dynamicGreeting() {
        const hours = new Date().getHours();
        let greeting = "Welcome to Firstflight Travels!";
        if (hours < 12) {
            greeting = "Good Morning, Welcome to Firstflight Travels!";
        } else if (hours < 18) {
            greeting = "Good Afternoon, Welcome to Firstflight Travels!";
        } else {
            greeting = "Good Evening, Welcome to Firstflight Travels!";
        }
        document.querySelector(".title h1").textContent = greeting;
    }
    dynamicGreeting();

    // Toggle menu for mobile view
    const navbar = document.querySelector(".navbar");
    const toggleButton = document.createElement("div");
    toggleButton.classList.add("menu-toggle");
    toggleButton.innerHTML = "☰";
    document.querySelector("nav").appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Close the menu when a link is clicked
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
});
