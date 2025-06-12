const addNoteElement = document.getElementById('addNote');
const notesContainer = document.getElementById('notesContainer');
const takenotes = document.getElementById('takenotes');
const deleteButton = document.getElementById('delete');


function loadNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
loadNotes();

function updateNotes() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

let notes = [];
addNoteElement.addEventListener('click' , () => {
    let noteText = document.createElement('p')
    let img = document.createElement('img');
    img.src = 'binicon.png';
    noteText.className = "inputText";
    noteText.setAttribute('contenteditable', 'true');
    notesContainer.appendChild(noteText).appendChild(img);

});

notesContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const noteElement = event.target.parentElement;
        notesContainer.removeChild(noteElement);
        updateNotes();
    }
    else if (event.target.tagName === 'P') {
        notes = document.querySelectorAll('.inputText');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                
                updateNotes();
            };
        });
    }
});