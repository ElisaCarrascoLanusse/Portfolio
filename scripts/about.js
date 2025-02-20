document.addEventListener("DOMContentLoaded", function () {
    // CV Button Event Listener
    const cvButton = document.querySelector("#cv-btn");
    if (cvButton) {
        cvButton.addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1H79gu7VVV_ltthRGdb4MyrxPU6kkXT_1/view?usp=sharing", "_blank");
        });
    }
});
