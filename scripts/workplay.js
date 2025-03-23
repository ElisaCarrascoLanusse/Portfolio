
document.addEventListener("DOMContentLoaded", () => {

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
