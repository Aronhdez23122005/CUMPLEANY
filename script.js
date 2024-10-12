document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.querySelector('.surprise-button');

    const inicioLink = document.getElementById('inicio-link');
    const mainImage = document.getElementById('main-image');
    const welcomeSection = document.querySelector('.welcome');
    const surpriseContent = document.getElementById('surprise-content');

    // Función para ocultar la imagen y la sección de bienvenida
    const hideMainContent = () => {
        mainImage.style.display = 'none';
        welcomeSection.style.display = 'none';
    };

    // Función para mostrar la imagen y la sección de bienvenida
    const showMainContent = () => {
        mainImage.style.display = 'block';
        welcomeSection.style.display = 'block';
        surpriseContent.style.display = 'none';
    };

    // Evento para el botón de sorpresa (no afecta la imagen principal)
    surpriseButton.addEventListener('click', () => {
        alert('¡Sorpresa!, aquí no hay nada... COMETE UN PAN!!!.');
    });
});