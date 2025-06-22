function toggleTheme() {
    const icon_elem = document.getElementById("icon-name");
    const body = document.querySelector("body");
    // Toggling the icon
    let txt = icon_elem.innerText;
    txt = txt === "dark_mode" ? "light_mode" : "dark_mode";
    icon_elem.innerText = txt;
    // Changing CSS
    body.classList.remove(txt === "dark_mode" ? "light_mode" : "dark_mode");
    body.classList.add(txt);
    localStorage.setItem("theme", txt);
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark_mode") toggleTheme();

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

    document.getElementById("toggle-dark-mode").addEventListener('click', toggleTheme)
})