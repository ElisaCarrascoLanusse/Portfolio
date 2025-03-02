
document.addEventListener("DOMContentLoaded", () => {

    const learnMoreButton = document.querySelector("#learn-more-btn");
    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", () => {
            event.preventDefault();
            window.location.href = "/about.html";
        });
    }

    const projects = [
        { id: "laboratoria-btn", url: "/projects/work/laboratoria.html"},
        { id: "memory-btn", url: "/projects/work/memory.html"},
        { id: "atip-btn", url: "/projects/work/atip.html"}
    ];

    const viewProjectButtons = document.querySelectorAll(".button");
    viewProjectButtons.forEach(button => {
        button.addEventListener("click", () => {
            const project = projects.find(p => p.id === button.id);
            if (project) {
                window.location.href = project.url;
            }
        });
    });    
});

