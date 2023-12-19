document.addEventListener('DOMContentLoaded', function () {
    // Daten für Sternzeichen und Planeten
    const sternzeichen = ["Widder", "Stier", "Zwillinge", "Krebse", "Löwe", "Jungfrau", "Waage", "Skorpion", "Schütze", "Steinbock", "Wassermann", "Fische"];
    const ich = ["Manifestieren", "Ex-zurück", "Selbstständigkeit",];

    // Container für die Buttons
    const buttonContainer = document.getElementById('astro-buttons');

    // Funktion zum Erstellen eines einzelnen Buttons
    function createButton(item, category) {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'btn-primary', 'me-2', 'mb-2');
        button.textContent = item;

        window.addEventListener('scroll', function() {
            const fixedButtons = document.querySelector('.fixed-buttons');
            if (window.scrollY > 100) {
                fixedButtons.style.opacity = '0';
            } else {
                fixedButtons.style.opacity = '1';
            }
        });

        // Event Listener hinzufügen, um auf Button-Klicks zu reagieren
        button.addEventListener('click', function () {
            // Hier kannst du die gewünschte Aktion für den Button-Klick einfügen
            console.log(`Button geklickt: ${item} - Kategorie: ${category}`);

            // Überprüfen, ob "Widder" oder "Stier" geklickt wurde und dann zur entsprechenden HTML-Seite weiterleiten
            if (item.toLowerCase() === 'widder') {
                window.location.href = 'Widder.html';
            } else if (item.toLowerCase() === 'stier') {
                window.location.href = 'Stier.html';
            } else if (item.toLowerCase() === 'zwillinge') {
                window.location.href = 'Zwillinge.html';
            } else if (item.toLowerCase() === 'krebse') {
                window.location.href = 'Krebse.html';  
            } else if (item.toLowerCase() === 'löwe') {
                window.location.href = 'Löwe.html'; 
            } else if (item.toLowerCase() === 'jungfrau') {
                window.location.href = 'Jungfrau.html'; 
            } else if (item.toLowerCase() === 'waage') {
                window.location.href = 'Waage.html';  
            } else if (item.toLowerCase() === 'skorpion') {
                window.location.href = 'Skorpion.html';
            } else if (item.toLowerCase() === 'schütze') {
                window.location.href = 'Schütze.html';   
            } else if (item.toLowerCase() === 'steinbock') {
                window.location.href = 'Steinbock.html'; 
            } else if (item.toLowerCase() === 'wassermann') {
                window.location.href = 'Wassermann.html'; 
            } else if (item.toLowerCase() === 'fische') {
                window.location.href = 'Fische.html';  
            } else if (item.toLowerCase() === 'selbstständigkeit') {
                window.location.href = 'Selbstständig.html'; 
            } else if (item.toLowerCase() === 'manifestieren') {
                window.location.href = 'Manifestation.html'; 
            } else if (item.toLowerCase() === 'ex-zurück') {
                window.location.href = 'Ex-ZUP.html';                                   
            } else {
                // Anderenfalls zum entsprechenden Abschnitt scrollen
                scrollToSection(item.toLowerCase());
            }

        });

        return button;
    }


    // Funktion zum Erstellen der Buttons für eine Kategorie
    function generateButtons(data, category) {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('mt-4');

        // Überschrift für die Kategorie
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryContainer.appendChild(categoryTitle);

        // Buttons erstellen und zum Container hinzufügen
        data.forEach(item => {
            const button = createButton(item, category);
            categoryContainer.appendChild(button);
        });

        buttonContainer.appendChild(categoryContainer);
    }

    // Buttons für Sternzeichen erstellen
    generateButtons(sternzeichen, 'Sternzeichen');

    // Buttons für Planeten erstellen
    generateButtons(ich, 'Ich');

    // Scroll to section function
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView();
        }
    }
});
