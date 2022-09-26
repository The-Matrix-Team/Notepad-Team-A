const allNotes = document.querySelector(".allNotes");

function deleteNote(id) {
  console.log("delete");
  const notes = JSON.parse(localStorage.getItem("notesapp-notes"));
  const newNotes = notes.filter((note) => note.id != id);
  localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
  location.reload(true / false);
}

function showNotes() {
  const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

  if (!notes) return;
  notes.forEach((note) => {
    console.log(note.content);

    let currentNote = `
    <div class="note-div">
          <h3 class="ti">${note.title}</h3>
          <p class="dsc">
          ${note.content}
          </p>
          <span>${note.date}</span>
          <button class="delete">
            <img src="assets/img/delete-alt.svg" alt=""  onclick="deleteNote('${note.id}')"/>
          </button>
        </div>
 

  `;

    allNotes.insertAdjacentHTML("afterend", currentNote);
  });
}

showNotes();

(function () {
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();
