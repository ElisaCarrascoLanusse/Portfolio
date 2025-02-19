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

    function attachHeaderEvents() {
        // Select the header image and title
        const headerImage = document.querySelector("#header-img");
        const headerTitle = document.querySelector("#header-h1");

        if (headerImage) {
            headerImage.addEventListener("click", () => {
                window.location.href = "../index.html";
            });
        }

        if (headerTitle) {
            headerTitle.addEventListener("click", () => {
                window.location.href = "../index.html";
            });
        }

        // Attach event listeners for navigation buttons
        attachNavigationEvents();
    }

    function attachNavigationEvents() {
        const pages = [
            { id: "#work", url: "../work.html" },
            { id: "#play", url: "../play.html" },
            { id: "#about", url: "../about.html" },
        ];

        pages.forEach(page => {
            const button = document.querySelector(page.id);
            if (button) {
                button.addEventListener("click", () => {
                    window.location.href = page.url;
                });
            }
        });

        attachContactFormEvents();
    }

    function attachContactFormEvents() {
        const contactButton = document.querySelector(`a[href='#contact-section']`);
        const contactFormContainer = document.getElementById("contact-form-container");
        const closeBtn = document.getElementById("close-btn");

        if (contactButton && contactFormContainer && closeBtn) {
            contactButton.addEventListener("click", (event) => {
                event.preventDefault();
                contactFormContainer.classList.remove("hidden");
            });

            closeBtn.addEventListener("click", () => {
                contactFormContainer.classList.add("hidden");
            });

            // Close form when clicking outside
            contactFormContainer.addEventListener("click", (event) => {
                if (event.target === contactFormContainer) {
                    contactFormContainer.classList.add("hidden");
                }
            });
        }
    }

   // CV Button Event Listener
   const cvButton = document.querySelector("#cv-btn");
   if (cvButton) {
       cvButton.addEventListener("click", () => {
           window.open("https://drive.google.com/file/d/1H79gu7VVV_ltthRGdb4MyrxPU6kkXT_1/view?usp=sharing", "_blank");
       });
   }
   
});
