const repositoryName = "your-repository-name"; // Change this to your actual repo name

const basePath = window.location.origin + "/" + repositoryName + "/";

function loadComponent(id, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
            if (callback) callback();
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load Components
loadComponent("header", basePath + "components/header.html", attachHeaderEvents);
loadComponent("footer", basePath + "components/footer.html");
loadComponent("contact-form-cont", basePath + "components/contact.html", attachContactFormEvents);

// Update Navigation Buttons
document.querySelectorAll("#header-img, #header-h1").forEach(el =>
    el.addEventListener("click", () => window.location.href = basePath + "index.html")
);

// Navigation Event Listeners
[
    { selector: "#work", url: "work.html" },
    { selector: "#play", url: "play.html" },
    { selector: "#about", url: "about.html" }
].forEach(({ selector, url }) =>
    document.querySelector(selector)?.addEventListener("click", () => {
        window.location.href = basePath + url;
    })
);

// Contact Form Fix
document.querySelector("a[href='#contact-section']")?.addEventListener("click", (event) => {
    event.preventDefault();
    toggleFormVisibility(true);
});
