// Description: Main script for the website. This script loads the header, contact form, and footer components, and attaches event listeners to navigation buttons!

document.addEventListener("DOMContentLoaded", () => {
    // Utility function to load components dynamically
    const loadComponent = (elementId, filePath, callback) => {
        fetch(filePath)
            .then(response => response.ok ? response.text() : Promise.reject(`Could not fetch ${filePath}: ${response.statusText}`))
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                callback?.(); // Invoke callback if provided
            })
            .catch(error => console.error('Error loading component:', error));
    };

    // Function to add click event listeners
    const addClickEvent = (selector, callback) => {
        document.querySelector(selector)?.addEventListener("click", callback);
    };

    // Load components
    loadComponent('header', './../components/header.html', attachHeaderEvents);
    loadComponent('footer', './../components/footer.html');
    loadComponent('contact-form-cont', './../components/contact.html', attachContactFormEvents);

    function attachHeaderEvents() {
        addClickEvent("#header-img", () => window.location.href = "./index.html");
        addClickEvent("#header-h1", () => window.location.href = "./index.html");
        attachNavigationEvents();
    }

    function attachNavigationEvents() {
        [
            { selector: "#work", url: "./work.html" },
            { selector: "#play", url: "./play.html" },
            { selector: "#about", url: "./about.html" }
        ].forEach(({ selector, url }) => addClickEvent(selector, () => window.location.href = url));
    }

    function attachContactFormEvents() {
        const contactFormContainer = document.getElementById("contact-form-container");
        if (!contactFormContainer) return;

        const toggleFormVisibility = (show) => contactFormContainer.classList.toggle("hidden", !show);

        addClickEvent(`a[href='#contact-section']`, (event) => {
            event.preventDefault();
            toggleFormVisibility(true);
        });

        addClickEvent("#close-btn", () => toggleFormVisibility(false));

        contactFormContainer.addEventListener("click", (event) => {
            if (event.target === contactFormContainer) toggleFormVisibility(false);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape") return;
            toggleFormVisibility(false);
        });
    }
});

