const beautifulToggle = document.getElementById('beautiful-toggle');
const dahejToggle = document.getElementById('dahej-toggle');
const sealPackedToggle = document.getElementById('seal-packed-toggle');

function handleToggleChange(clickedToggle) {

    if (beautifulToggle.checked && dahejToggle.checked && clickedToggle === sealPackedToggle) {
        dahejToggle.checked = false; // Turn off Dahej
    }

    if (beautifulToggle.checked && sealPackedToggle.checked && clickedToggle === dahejToggle) {
        sealPackedToggle.checked = false; // Turn off Seal Packed
    }

    if (dahejToggle.checked && sealPackedToggle.checked && clickedToggle === beautifulToggle) {
        sealPackedToggle.checked = false; // Turn off Seal Packed
    }
}

beautifulToggle.addEventListener('change', () => handleToggleChange(beautifulToggle));
dahejToggle.addEventListener('change', () => handleToggleChange(dahejToggle));
sealPackedToggle.addEventListener('change', () => handleToggleChange(sealPackedToggle));
