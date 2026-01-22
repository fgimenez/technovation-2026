// Datos de todas las presentaciones
const slides = [
    {
        session: "Sesión 01",
        title: "Identificar Problemas",
        description: "Aprende a identificar problemas reales en tu familia, escuela y comunidad que puedas resolver con tecnología.",
        icon: "🔍",
        path: "slides/01/identificar-problemas-presentacion.html"
    },
    {
        session: "Sesión 01",
        title: "Introducción a Algoritmos",
        description: "Descubre qué son los algoritmos y cómo funcionan. ¡El primer paso para crear tu app!",
        icon: "🤖",
        path: "slides/01/algoritmos-presentacion.html"
    },
    {
        session: "Sesión 02",
        title: "Mapeo de Problemas",
        description: "Organiza y prioriza los problemas que has identificado para elegir el mejor para tu proyecto.",
        icon: "🗺️",
        path: "slides/02/mapeo-problemas-presentacion.html"
    }
];

// Función para cargar slides en el contenedor
function loadSlides() {
    const container = document.getElementById('slidesContainer');

    if (!container) {
        console.error('No se encontró el contenedor de slides');
        return;
    }

    slides.forEach(slide => {
        const card = document.createElement('a');
        card.href = slide.path;
        card.className = 'slide-card';

        card.innerHTML = `
            <span class="slide-session">${slide.session}</span>
            <div class="slide-icon">${slide.icon}</div>
            <h3 class="slide-title">${slide.title}</h3>
            <p class="slide-description">${slide.description}</p>
        `;

        container.appendChild(card);
    });
}

// Cargar slides cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadSlides);
