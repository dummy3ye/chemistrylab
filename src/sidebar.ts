const bookIcon = document.getElementById('book-icon');
const infoDisplay = document.getElementById('info-display');
const infoContent = document.getElementById('info-content');

if (bookIcon && infoDisplay && infoContent) {
    bookIcon.addEventListener('click', () => {
        infoDisplay.classList.toggle('hidden');
    });

    infoContent.innerHTML = `
        <h2>Carbon (C)</h2>
        <p>Atomic Number: 6</p>
        <p>Atomic Mass: 12.011</p>
        <p>Electron Configuration: [He] 2s² 2p²</p>
        <p>Carbon is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds. It belongs to group 14 of the periodic table. Carbon is one of the few elements known since antiquity.</p>

        <h2>Hydrogen (H)</h2>
        <p>Atomic Number: 1</p>
        <p>Atomic Mass: 1.008</p>
        <p>Electron Configuration: 1s¹</p>
        <p>Hydrogen is a chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.</p>
    `;
}