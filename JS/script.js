document.addEventListener('DOMContentLoaded', () => {

    // Creamos el contenedor invisible
    const popupContainer = document.createElement('div');
    document.body.appendChild(popupContainer);

    // Seleccionamos TODAS las tarjetas de servicio
    const serviceCards = document.querySelectorAll('.service-card');

    // Recorremos cada tarjeta para darle su funcionalidad
    serviceCards.forEach((card, index) => {
        
        card.addEventListener('click', () => {
            // El index empieza en 0, así que le sumamos 1 para que busque popUp1, popUp2, etc.
            const popUpFile = `popUp${index + 1}.html`;

            // Llamamos al archivo correspondiente
            fetch(popUpFile)
                .then(response => {
                    // Si el archivo no existe aún (ej. popUp3), no hace nada para evitar errores
                    if (!response.ok) throw new Error('Archivo no encontrado');
                    return response.text();
                })
                .then(data => {
                    popupContainer.innerHTML = data;

                    // Buscamos el pop-up que acabamos de inyectar
                    const modalOverlay = popupContainer.querySelector('.modal-overlay');
                    modalOverlay.classList.add('active');

                    // Bloqueamos el scroll del fondo
                    document.body.style.overflow = 'hidden';

                    // Seleccionamos el botón de cerrar de este pop-up específico
                    const closeBtn = popupContainer.querySelector('.modal-close');
                    
                    // Cerrar con la X
                    closeBtn.addEventListener('click', () => {
                        modalOverlay.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    });

                    // Cerrar al hacer clic fuera de la caja
                    modalOverlay.addEventListener('click', (event) => {
                        if (event.target === modalOverlay) {
                            modalOverlay.classList.remove('active');
                            document.body.style.overflow = 'auto';
                        }
                    });
                })
                .catch(error => console.log("Aún no se ha creado este pop-up:", popUpFile));
        });
    });
    // ==========================================
    // CARGA DINÁMICA DE FRAGMENTOS (SIDEBAR)
    // ==========================================
    
    // 1. Buscamos si en la página actual existe el hueco para el sidebar
    const sidebarContainer = document.getElementById('sidebar-container');

    // 2. Si existe (es decir, estamos en contact-us o work-with-us), hacemos la llamada
    if (sidebarContainer) {

        fetch('fragments/sidebar.html')
            .then(response => {
                if (!response.ok) throw new Error('No se pudo cargar el sidebar');
                return response.text();
            })
            .then(data => {
                // Inyectamos todo el código HTML dentro de nuestro contenedor vacío
                sidebarContainer.innerHTML = data;
            })
            .catch(error => console.error("Error cargando sidebar:", error));
    }
});