document.addEventListener('DOMContentLoaded', () => {
    // Selectores existentes
    const phone = document.getElementById('phone-container');
    const title = document.querySelector('.reveal-text');
    const ticket = document.querySelector('.order-ticket');
    const bgLight = document.getElementById('bg-cursor-light');
    const bars = document.querySelectorAll('.bar-chart');
    
    // 1. SELECTOR DE BURBUJAS (Ahora dentro del DOMContentLoaded)
    const blobs = document.querySelectorAll('.solid-blob');

    // 2. FUNCIÓN DE MOVIMIENTO (Ahora dentro del mismo bloque)
    const moveBlobs = () => {
        blobs.forEach(blob => {
            // Posiciones aleatorias por toda la sección
            const randomX = Math.floor(Math.random() * 80) + 5;
            const randomY = Math.floor(Math.random() * 80) + 5;
            const randomScale = 0.8 + Math.random() * 0.8;

            blob.style.left = `${randomX}%`;
            blob.style.top = `${randomY}%`;
            blob.style.transform = `scale(${randomScale})`;
            blob.style.opacity = "1";
        });
    };

    // 3. ACTIVAR EL MOVIMIENTO
    if (blobs.length > 0) {
        moveBlobs(); // Primera vez inmediato
        setInterval(moveBlobs, 5000); // Se mueven solas cada 5 segundos
    }

    // --- EL RESTO DE TU CÓDIGO SE MANTIENE IGUAL ---

    // Inicio de secuencia
    setTimeout(() => {
        if (title) title.classList.add('active');
    }, 400);

    // Lógica de Scroll
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        if (phone) {
            const moveXParallax = (scrollValue * 0.15); 
            const rotateValue = -5 + (scrollValue * 0.05);
            phone.style.transform = `translateY(-50%) translateX(-${moveXParallax}px) rotate(${rotateValue}deg)`;
        }
    });

    // Interacción con el Mouse
    document.addEventListener('mousemove', (e) => {
        if (bgLight) {
            bgLight.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 1200, fill: "forwards" });
        }
    });

    // Gráfico dinámico
    const updateBars = () => {
        bars.forEach(bar => {
            const randomHeight = Math.floor(Math.random() * (95 - 30 + 1) + 30);
            bar.style.height = `${randomHeight}%`;
        });
    };
    setInterval(updateBars, 2500);
    updateBars();

    // Observer para las Cards
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.flip-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s ease-out";
        cardObserver.observe(card);
    });
});


// 7. OBSERVER PARA SECCIÓN CONTROL
    const controlObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    const controlSection = document.querySelector('.control-container');
    if (controlSection) {
        controlSection.style.opacity = "0";
        controlSection.style.transform = "translateY(50px)";
        controlSection.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
        controlObserver.observe(controlSection);
    }
// 8. GENERADOR DE PARTÍCULAS BEIGE (Añadir al final de script.js)
const createParticles = () => {
    const container = document.getElementById('particles-js');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgb(255, 255, 255)';
        particle.style.borderRadius = '50%';
        
        // Posición inicial aleatoria
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        
        container.appendChild(particle);

        // Animación simple con el API de Web Animations
        particle.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 0 },
            { transform: `translateY(-${Math.random() * 100}px) translateX(${Math.random() * 50}px)`, opacity: 0.5 },
            { transform: `translateY(-${Math.random() * 200}px) translateX(0)`, opacity: 0 }
        ], {
            duration: Math.random() * 5000 + 5000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
};

createParticles();
    

// 10. REVELADO DE CITA
    const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.animate([
                    { opacity: 0, transform: 'scale(0.95) translateY(20px)' },
                    { opacity: 1, transform: 'scale(1) translateY(0)' }
                ], {
                    duration: 1200,
                    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    fill: 'forwards'
                });
            }
        });
    }, { threshold: 0.5 });

    const quoteContent = document.querySelector('.quote-content');
    if (quoteContent) {
        quoteContent.style.opacity = "0";
        quoteObserver.observe(quoteContent);
    }

//Cita
document.addEventListener('DOMContentLoaded', () => {
    const area = document.querySelector('#quote-area');
    const spotlight = document.querySelector('#spotlight');

    if (area && spotlight) {
        area.addEventListener('mousemove', (e) => {
            const rect = area.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Movimiento directo sin transiciones de CSS para que sea instantáneo
            requestAnimationFrame(() => {
                spotlight.style.left = `${x}px`;
                spotlight.style.top = `${y}px`;
                spotlight.style.opacity = '1';
                spotlight.style.transform = 'translate(-50%, -50%)';
            });
        });

        area.addEventListener('mouseleave', () => {
            spotlight.style.opacity = '0';
        });
    }
});





// 9. PARTÍCULAS HORIZONTALES PARA SECCIÓN EFICIENCIA
const initHorizontalParticles = () => {
    const container = document.getElementById('h-particles');
    if (!container) return;

    container.innerHTML = '';

    const particleCount = 40; 

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'h-particle';
        
        // Configuramos variaciones aleatorias
        const width = Math.random() * 150 + 80;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3000 + 3000;

        p.style.width = `${width}px`;
        p.style.top = `${top}%`;
        p.style.left = '-200px';

        container.appendChild(p);
        p.animate([
            { left: '-200px', opacity: 0 },
            { opacity: 1, offset: 0.2 },
            { opacity: 1, offset: 0.8 },
            { left: '110%', opacity: 0 }
        ], {
            duration: duration,
            iterations: Infinity,
            easing: 'linear',
            delay: delay * 1000
        });
    }
};
initHorizontalParticles();

//mapa
// --- INICIALIZACIÓN DE MAPA RUISU ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Coordenadas de tu ubicación (Latitud, Longitud)
    const myCoords = [7.7678638,-72.2196585]; 

    // 2. Crear el mapa
    const map = L.map('map', {
        scrollWheelZoom: false,
        zoomControl: false 
    }).setView(myCoords, 16);

    // 3. Capa de Google Maps Original (Street View Style)
    L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'],
        attribution: '&copy; Google Maps'
    }).addTo(map);

    // 4. Icono personalizado para el punto
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: #E3D1C4; width: 18px; height: 18px; border-radius: 50%; border: 3px solid #000; box-shadow: 0 0 15px rgba(227,209,196,0.8);"></div>`,
        iconSize: [18, 18]
    });

    const marker = L.marker(myCoords, { icon: customIcon }).addTo(map);

    // 5. Contenido del Popup Moderno
    const popupContent = `
    <div class="custom-popup-card">
        <div class="popup-header">
            <span class="popup-status">Sede Central</span>
        </div>
        <strong style="font-size: 15px; color: #000;">Wakame Sushi Bar</strong>
        <div class="stars-container">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            
            <span class="half-star-container">
                <i class="fa-solid fa-star" style="color: #eee;"></i> <i class="fa-solid fa-star-half-stroke" style="position: absolute; left: 0; color: #FFD700;"></i>
            </span>

            <span style="color: #444; margin-left: 6px; font-weight: 700;">4.6</span>
        </div>
        <p class="popup-desc">Comida Japonesa y Sushi.</p>
        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;">
            <a href="https://maps.google.com" target="_blank" style="text-decoration:none; font-size:11px; font-weight:700; color:#000;">
                CÓMO LLEGAR <i class="fa-solid fa-arrow-right" style="margin-left:5px;"></i>
            </a>
        </div>
    </div>
`;

    marker.bindPopup(popupContent, { closeButton: false }).openPopup();
});

//Seccion 9'
// Añade esto a tu script.js para que las tarjetas aparezcan suavemente
const bentoCards = document.querySelectorAll('.bento-card');

const bentoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

bentoCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    bentoObserver.observe(card);
});

//Sección 10
const initMasonryParticles = () => {
    const container = document.getElementById('masonry-particles');
    if (!container) return;

    container.innerHTML = ''; 
    const particleCount = 60; // Más partículas para que se note el efecto

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'm-particle';
        
        // Tamaños variados
        const size = Math.random() * 3 + 1.5;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        
        // Posición inicial aleatoria en todo el contenedor
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;

        container.appendChild(p);

        // Animación de flotación
        const duration = Math.random() * 10000 + 8000;
        const delay = Math.random() * -15000;

        p.animate([
            { transform: 'translateY(0) scale(1)', opacity: 0 },
            { transform: `translateY(-100px) scale(1.5)`, opacity: 0.7 }, // Brillo máximo a mitad
            { transform: `translateY(-200px) scale(1)`, opacity: 0 }
        ], {
            duration: duration,
            delay: delay,
            iterations: Infinity,
            easing: 'linear'
        });
    }
}

// Ejecución
document.addEventListener('DOMContentLoaded', initMasonryParticles);


//Seccion 11
const initDataStream = () => {
    const container = document.getElementById('data-stream-bg');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
        const stream = document.createElement('div');
        stream.style.cssText = `
            position: absolute;
            height: 1px;
            width: ${Math.random() * 50 + 20}px;
            background: linear-gradient(90deg, transparent, rgba(227, 209, 196, 0.3));
            top: ${Math.random() * 100}%;
            left: -100px;
            pointer-events: none;
        `;
        container.appendChild(stream);

        stream.animate([
            { left: '-100px' },
            { left: '110%' }
        ], {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity,
            delay: Math.random() * 5000
        });
    }
};

document.addEventListener('DOMContentLoaded', initDataStream);

//FAQ
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        faqItem.classList.toggle('active');

        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

//footer
const initFooterParticles = () => {
    const container = document.getElementById('footer-dots');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.style.cssText = `
            position: absolute;
            width: 1px; height: 1px;
            background: #ffffff;
            opacity: 0.2;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        `;
        container.appendChild(p);

        p.animate([{ opacity: 0.1 }, { opacity: 0.4 }, { opacity: 0.1 }], {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity
        });
    }
};
document.addEventListener('DOMContentLoaded', initFooterParticles);