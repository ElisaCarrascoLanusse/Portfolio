document.addEventListener("DOMContentLoaded", function () {
    // CV Button Event Listener
    const cvButton = document.querySelector("#cv-btn");
    if (cvButton) {
        cvButton.addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1a0vl8cgyC5yo9xYC5vg5SItyhtk_sNSg/view?usp=sharing", "_blank");
        });
    }
});
