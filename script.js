const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() { // fonction pour afficher les notes
  notesContainer.innerHTML = localStorage.getItem("notes"); // affiche les notes dans le localStorage
}
showNotes(); // appelle la fonction showNotes

function updateLocalStorage() { // fonction pour mettre à jour le localStorage
  localStorage.setItem("notes", notesContainer.innerHTML); // met à jour les notes dans le localStorage
}

createButton.addEventListener("click", () => {
  // quand on clique
  let inputBox = document.createElement("p"); // créé un <p>
  let img = document.createElement("img"); // créé un <img>
  inputBox.className = "input-box"; // ajoute la classe "input-box" au <p>
  inputBox.setAttribute("contenteditable", "true"); // ajoute l'attribut "contenteditable" au <p>
  img.src = "images/delete.png"; // ajoute la source de l'image
  notesContainer.appendChild(inputBox).appendChild(img); // ajoute le <p> et l'<img> à notesContainer
});

notesContainer.addEventListener("click", function (e) {
  // quand on clique
  if (e.target.tagName === "IMG") {
    // si la cible est une image
    e.target.parentElement.remove(); // supprime le parent de l'image
    updateLocalStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((notes) => {
      notes.onkeyup = function () {
        updateLocalStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => { // quand on appuie sur une touche
  if (event.key === "Enter") { // si on appuie sur la touche "Entrée"
    document.execCommand("insertHTML", false, "<br><br>");  // ajoute un saut de ligne
    event.preventDefault(); // empêche le comportement par défaut
  } 
});
