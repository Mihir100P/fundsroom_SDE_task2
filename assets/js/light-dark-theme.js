function toggleTheme() {
const body = document.body;
body.classList.toggle("dark-mode");

const icon = document.getElementById("themeIcon");

if (body.classList.contains("dark-mode")) {
    icon.className = "fa fa-sun";
    localStorage.setItem("theme", "dark");
} else {
    icon.className = "fa fa-moon";
    localStorage.setItem("theme", "light");
}
}

// Load user preference
(function() {
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("themeIcon").className = "fa fa-sun";
}
})();
