document.addEventListener("DOMContentLoaded", function () {
    // CV Button Event Listener
    const cvButton = document.querySelector("#cv-btn");
    if (cvButton) {
        cvButton.addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1xfrwjXx6tT64fMnJw1VoRSJ92P-7Hhs6/view?usp=sharing", "_blank");
        });
    }
});
