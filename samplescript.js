const changeNameButton = document.getElementById("changeName");
const studentName = document.getElementById("studentName");
const changeBackgroundButton = document.getElementById("changeBackground");
const profile = document.getElementById("profile");
const toggleDetailsButton = document.getElementById("toggleDetails");
const details = document.getElementById("details");

changeNameButton.addEventListener("click", function () {
    studentName.textContent = "Johnrex Alvarez";
});

changeBackgroundButton.addEventListener("click", function () {
    if (profile.style.backgroundColor === "rgb(204, 251, 241)") {
        profile.style.backgroundColor = "white";
    } else {
        profile.style.backgroundColor = "#ccfbf1";
    }
});

toggleDetailsButton.addEventListener("click", function () {
    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {
        toggleDetailsButton.textContent = "Show Details";
    } else {
        toggleDetailsButton.textContent = "Hide Details";
    }
});
