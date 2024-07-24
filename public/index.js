document.addEventListener('DOMContentLoaded', () => {
    loadSectors();
});

function loadSectors() {
    fetch('/sectors')
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(sectorId => {
                const sector = document.getElementById(sectorId);
                if (sector) {
                    sector.className = `sector ${data[sectorId]}`;
                }
            });
        })
        .catch(error => console.error('Error loading sectors:', error));
}

function changeSectorState(sectorId) {
    const sector = document.getElementById(sectorId);
    if (!sector) return;

    let newState;
    if (sector.classList.contains('libre')) {
        newState = 'ocupado';
    } else if (sector.classList.contains('ocupado')) {
        newState = 'reservado';
    } else {
        newState = 'libre';
    }

    sector.className = `sector ${newState}`;

    updateSectors(sectorId, newState);
}

function updateSectors(sectorId, newState) {
    fetch('/sectors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ [sectorId]: newState })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error updating sectors:', error));
}
