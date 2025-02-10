// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the contact button in the menu that links to the contact section
    const contactButton = document.querySelector(`#menu a[href='#contact-section']`);
    
    // Select the container element for the contact form
    const contactFormContainer = document.getElementById("contact-form-container");
    
    // Select the close button inside the contact form
    const closeBtn = document.getElementById("close-btn");

    // Show the contact form when the Contact button is clicked
    contactButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor behavior (jumping to the section)
        contactFormContainer.classList.remove("hidden"); // Remove the 'hidden' class to show the form
    });

    // Close the form when clicking the close button
    closeBtn.addEventListener("click", () => {
        contactFormContainer.classList.add("hidden"); // Add the 'hidden' class to hide the form
    });

    // Close the form when clicking outside of it
    contactFormContainer.addEventListener("click", (event) => {
        if (event.target === contactFormContainer) { // Check if the click was outside the form (on the container)
            contactFormContainer.classList.add("hidden"); // Add the 'hidden' class to hide the form
        }
    });
});