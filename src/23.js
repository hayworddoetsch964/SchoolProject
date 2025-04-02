function addNote(note) {
  const noteDiv = document.getElementById("notes");
  noteDiv.innerHTML += `<p>${note}</p>`;
}

function deleteNote(index) {
  if (index >= 0 && index < this.notes.length) {
    this.notes.splice(index, 1);
  }
}

function updateNote(index, newNote) {
  if (index >= 0 && index < this.notes.length) {
    this.notes[index] = newNote;
  }
}
