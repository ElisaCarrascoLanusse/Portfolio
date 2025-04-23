
document.addEventListener("DOMContentLoaded", () => {

    // Work
    const workProjects = [
        { id: "laboratoria-btn", url: "projects/work/laboratoria.html"},
        { id: "memory-btn", url: "projects/work/memory.html"},
        { id: "atip-btn", url: "projects/work/atip.html"}
    ];

    const viewWorkButtons = document.querySelectorAll(".btn");
    viewWorkButtons.forEach(button => {
        button.addEventListener("click", () => {
            const project = workProjects.find(p => p.id === button.id);
            if (project) {
                window.location.href = project.url;
            }
        });
    });    

    // Work Other Projects
        // Set buttons
        const presentationsButton = document.querySelector("#presentations-btn"); 
        const graphicsButton = document.querySelector("#graphics-btn");

        // Set presentations and graphics sections
        const presentations = document.querySelector("#presentations");
        const graphics = document.querySelector("#graphics");

        if (presentationsButton && graphicsButton && presentations && graphics) {
            presentationsButton.addEventListener("click", () => {
                presentations.classList.remove("hidden");
                presentations.classList.add("flex");

                graphics.classList.add("hidden");
                graphics.classList.remove("flex");
            });

            graphicsButton.addEventListener("click", () => {
                graphics.classList.remove("hidden");
                graphics.classList.add("flex");

                presentations.classList.add("hidden");
                presentations.classList.remove("flex");
            });
        }


    // Play
    const playProjects = [
        { id: "theology-btn", url: "projects/play/theology.html"}
    ];

    const viewPlayButtons = document.querySelectorAll(".btn");
    viewPlayButtons.forEach(button => {
        button.addEventListener("click", () => {
            const project = playProjects.find(p => p.id === button.id);
            if (project) {
                window.location.href = project.url;
            }
        });
    });    
});
