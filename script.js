function addNote() {
    // Pobierz tekst wprowadzony przez użytkownika
    var noteText = document.getElementById("input_field").value;

    // Sprawdź, czy tekst nie jest pusty
    if (noteText.trim() !== "") {
        // Stwórz nowy element notatki
        var noteElement = document.createElement("p");
        noteElement.className = "note";
        noteElement.textContent = noteText;

        // Dodaj krzyżyk do usuwania notatki
        var deleteButton = document.createElement("h6");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Clear";
        deleteButton.addEventListener("click", function () {
            // Funkcja obsługująca kliknięcie na krzyżyk - usuń notatkę
            noteElement.parentNode.removeChild(noteElement);
        });

        // Dodaj krzyżyk do elementu notatki
        noteElement.appendChild(deleteButton);

        // Dodaj notatkę do kontenera
        document.getElementById("notes-container").appendChild(noteElement);

        // Wyczyść pole input
        document.getElementById("input_field").value = "";
    }
}

function resetMe() {
    document.getElementById("notes-container").innerHTML = "";
}
