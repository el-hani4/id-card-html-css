let btn = document.getElementById("btn");
let recto = document.getElementById("recto");
let verso = document.getElementById("verso");

verso.style.display = "none";

btn.addEventListener("click", () => {
    if (recto.style.display !== "none") {
        recto.style.display = "none";
        verso.style.display = "block";
        btn.textContent = "Voir recto";
    } else {
        recto.style.display = "block";
        verso.style.display = "none";
        btn.textContent = "Voir verso";
    }
});