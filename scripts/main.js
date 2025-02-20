// Description: Main script for the website. This script loads the header and footer components, and attaches event listeners to the navigation buttons.
document.addEventListener("DOMContentLoaded", function () {
    // Function to load an HTML component into a specified element
    function loadComponent(elementId, filePath, callback) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Could not fetch ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback(); // Ensure event listeners are set after the component is loaded
            })
            .catch(error => {
                console.error('Error loading component:', error);
            });
    }

    // Load header and footer, then attach event listeners
    loadComponent('header', 'components/header.html', attachHeaderEvents);
    loadComponent('footer', 'components/footer.html');
    // Load contact form and attach events after it is loaded
    loadComponent('contact-form', 'components/contact.html', attachContactFormEvents);

    function attachHeaderEvents() {
        // Select the header image and title
        const headerImage = document.querySelector("#header-img");
        const headerTitle = document.querySelector("#header-h1");

        if (headerImage) {
            headerImage.addEventListener("click", () => {
                window.location.href = "index.html";
            });
        }

        if (headerTitle) {
            headerTitle.addEventListener("click", () => {
                window.location.href = "index.html";
            });
        }

        // Attach event listeners for navigation buttons
        attachNavigationEvents();
    }

    function attachNavigationEvents() {
        const pages = [
            { id: "#work", url: "work.html" },
            { id: "#play", url: "play.html" },
            { id: "#about", url: "about.html" },
            { id: "#learn-more-btn", url: "about.html" }
        ];

        pages.forEach(page => {
            const button = document.querySelector(page.id);
            if (button) {
                button.addEventListener("click", () => {
                    window.location.href = page.url;
                });
            }
        });
    }

    function attachContactFormEvents() {
        // Ensure the elements are available after the contact form is loaded
        const contactSectionLink = document.querySelector(`a[href='#contact-section']`);
        const contactFormContainer = document.getElementById("contact-form-container");
        const closeButton = document.getElementById("close-btn");

        if (contactSectionLink && contactFormContainer && closeButton) {
            // Show the contact form when the link is clicked
            contactSectionLink.addEventListener("click", (event) => {
                event.preventDefault();  // Prevent default anchor link behavior
                contactFormContainer.classList.remove("hidden"); // Show the contact form
            });

            // Hide the contact form when the close button is clicked
            closeButton.addEventListener("click", () => {
                contactFormContainer.classList.add("hidden");
            });

            // Close the contact form when clicking outside the form container
            contactFormContainer.addEventListener("click", (event) => {
                if (event.target === contactFormContainer) {
                    contactFormContainer.classList.add("hidden");
                }
            });
        }
    }
});
