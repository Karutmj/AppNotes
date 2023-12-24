function addNote() {
    // Pobierz tekst wprowadzony przez użytkownika
    var noteText = document.getElementById("input_field").value;

    // Sprawdź, czy tekst nie jest pusty
    if (noteText.trim() !== "") {
        // Stwórz nowy element notatki
        var noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.textContent = noteText;
        var newNoteElement = document.createElement("div");
        noteElement.className="NewNote"
        newNoteElement.textContent = "New Note: ";
        document.getElementById("notes-container").appendChild(newNoteElement);

        // Dodaj notatkę do kontenera
        document.getElementById("notes-container").appendChild(noteElement);

        // Wyczyść pole input
        document.getElementById("input_field").value = "";
       
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Wykryj zdarzenie załadowania strony
    window.onload = function () {
        // Ukryj animację ładowania po załadowaniu strony
        document.getElementById("loader-container").style.display = "none";
        // Przywróć widoczność paska przewijania
        document.body.style.overflow = "visible";
    };
});
