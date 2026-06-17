// theme toggle logic
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // restore saved preference
    if (localStorage.getItem("focusMode") === "true") {
        body.classList.add("focus-mode");
        toggleButton.textContent = "Chill mode";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("focus-mode");
        const active = body.classList.contains("focus-mode");
        toggleButton.textContent = active ? "Chill mode" : "Focus mode";
        localStorage.setItem("focusMode", active);
    });
});
