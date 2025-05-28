document.addEventListener("DOMContentLoaded", () =>{

    const [homeButton, aboutButton] = ["homeButton", "aboutButton"]
        .map(e => document.getElementById(e))

    function changeView(viewId) {
        document.querySelectorAll(".view").forEach(e => e.style.display = "none")
        document.getElementById(viewId).style.display = "block"
    }

    homeButton.addEventListener('click', () => changeView("home"))
    aboutButton.addEventListener('click', () => changeView("about"))

    document.getElementById("linkedin").addEventListener('click', () => window.open("https://www.linkedin.com/in/albert-young-6b5681255/", target="_blank"))
    document.getElementById("github").addEventListener('click', () => window.open("https://github.com/ajyoung07", target="_blank"))
    document.getElementById("email").addEventListener('click', () => window.open('mailto:alberjyoung1@gmail.com', target='_blank'));

    document.getElementById("toggle-dark-mode").addEventListener('click', () => {
        const icon_elem = document.getElementById("icon-name");
        let txt = icon_elem.innerText;
        if (txt === "dark_mode") txt = "light_mode";
        else txt = "dark_mode";
        icon_elem.innerText = txt;
    })
})