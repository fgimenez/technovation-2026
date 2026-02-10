// Datos de todas las presentaciones
const slides = [
    {
        session: "Sesión 01",
        title: "Identificar Problemas",
        description: "Aprende a identificar problemas reales en tu familia, escuela y comunidad que puedas resolver con tecnología.",
        icon: "🔍",
        path: "slides/01/identificar-problemas.html"
    },
    {
        session: "Sesión 01",
        title: "Introducción a Algoritmos",
        description: "Descubre qué son los algoritmos y cómo funcionan. ¡El primer paso para crear tu app!",
        icon: "🤖",
        path: "slides/01/algoritmos.html"
    },
    {
        session: "Sesión 02",
        title: "Mapeo de Problemas",
        description: "Organiza y prioriza los problemas que has identificado para elegir el mejor para tu proyecto.",
        icon: "🗺️",
        path: "slides/02/mapeo-problemas.html"
    },
    {
        session: "Sesión 03",
        title: "Introducción ODS de la ONU",
        description: "Descubre los 17 Objetivos de Desarrollo Sostenible y cómo tu app puede contribuir a un mundo mejor.",
        icon: "🌍",
        path: "slides/03/ods.html"
    },
    {
        session: "Sesión 03",
        title: "Elige tu Problema a Resolver",
        description: "Actividad para votar y elegir el problema que tu equipo resolverá con la app.",
        icon: "🗳️",
        path: "slides/03/elegir-problema.html"
    },
    {
        session: "Sesión 03",
        title: "AppInventor Parte 1: Designer",
        description: "Conoce MIT App Inventor y aprende a diseñar la estructura visual de tu app con la sección Designer.",
        icon: "🎨",
        path: "slides/03/appinventor.html"
    },
    {
        session: "Sesión 04",
        title: "AppInventor Parte 2: Blocks",
        description: "Programa la funcionalidad de tu app con bloques para que responda a las acciones del usuario.",
        icon: "⚙️",
        path: "slides/04/appinventor-blocks.html"
    },
    {
        session: "Sesión 05",
        title: "Creación de Prototipos",
        description: "Aprende qué es un prototipo, por qué son importantes, y cómo crear prototipos en papel antes de programar.",
        icon: "✏️",
        path: "slides/05/prototipos.html"
    },
    {
        session: "Sesión 06",
        title: "Conjuntos de Datos",
        description: "Aprende qué es un conjunto de datos saludable, cómo evitar el sesgo, y cómo recopilar datos para tu proyecto.",
        icon: "📊",
        path: "slides/06/conjuntos-de-datos.html"
    }
];

// Función para cargar slides en el contenedor
function loadSlides() {
    const container = document.getElementById('slidesContainer');

    if (!container) {
        console.error('No se encontró el contenedor de slides');
        return;
    }

    console.log(`Cargando ${slides.length} presentaciones...`);

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

    console.log('Presentaciones cargadas correctamente');
}

// Cargar slides cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadSlides);
