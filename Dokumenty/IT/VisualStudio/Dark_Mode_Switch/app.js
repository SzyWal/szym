const switchBtn = document.querySelector("header button")
let theme = localStorage.getItem("theme");

switchBtn.addEventListener('click', () => {
    //document.querySelector('body').classList.toggle("dark");
    if(theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
        theme = "light";

    } else {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
        theme = "dark";
    }

    localStorage.setItem("theme", "dark");
});



if (theme === "dark") {
    document.querySelector("body").classList.add("dark")
}

if (theme === "light") {
    document.querySelector("body").classList.add("light")
}