// HEADER //
document.addEventListener("DOMContentLoaded", () => {
    // Select the header image and the h1 element
    const headerImage = document.querySelector("#header-img");
    const headerTitle = document.querySelector("#header-h1");

    // Navigate to index.html when the header image is clicked
    headerImage.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Navigate to index.html when the header title is clicked
    headerTitle.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});

// WORK PAGE //
document.addEventListener("DOMContentLoaded", () => {
    // Select the work button
    const workButton = document.querySelector("#work");
    // Navigate to work.html when the work button is clicked
    workButton.addEventListener("click", () => {
        window.location.href = "work.html";
    });
});

// PLAY PAGE //
document.addEventListener("DOMContentLoaded", () => {
    // Select the play button
    const playButton = document.querySelector("#play");
    // Navigate to play.html when the play button is clicked
    playButton.addEventListener("click", () => {
        window.location.href = "play.html";
    });
});

// ABOUT PAGE //
document.addEventListener("DOMContentLoaded", () => {
    // Select the about button
    const aboutButton = document.querySelector("#about");
    // Navigate to play.html when the play button is clicked
    aboutButton.addEventListener("click", () => {
        window.location.href = "about.html";
    });
});

// CV BUTTON //
document.addEventListener("DOMContentLoaded", () => {
    // Select the CV button
    const cvButton = document.querySelector("#cv-btn");
    // Navigate to the raw GitHub link when the CV button is clicked
    cvButton.addEventListener("click", () => {
        window.open("https://drive.google.com/file/d/1H79gu7VVV_ltthRGdb4MyrxPU6kkXT_1/view?usp=sharing" , "_blank");
    });
});

// CONTACT PAGE //
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



// FOOTER //