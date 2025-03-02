document.addEventListener("DOMContentLoaded", () => {
    // Determine base path dynamically
    const basePath = (() => {
        const depth = window.location.pathname.split('/').length - 2; // Subtract 2 to adjust for leading slash
        return depth > 0 ? "../".repeat(depth) : "./";
    })();

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

    // Load components with dynamic base path
    loadComponent('header', `${basePath}components/header.html`, attachHeaderEvents);
    loadComponent('footer', `${basePath}components/footer.html`);
    loadComponent('contact-form-cont', `${basePath}components/contact.html`, attachContactFormEvents);

    function attachHeaderEvents() {
        addClickEvent("#header-img", () => window.location.href = `${basePath}index.html`);
        addClickEvent("#header-h1", () => window.location.href = `${basePath}index.html`);
        attachNavigationEvents();
    }

    function attachNavigationEvents() {
        [
            { selector: "#work", url: "work.html" },
            { selector: "#play", url: "play.html" },
            { selector: "#about", url: "about.html" }
        ].forEach(({ selector, url }) => addClickEvent(selector, () => window.location.href = `${basePath}${url}`));
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
