document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // INTERACTIVIDAD DE SUBIDA DE ARCHIVOS (CV)
    // ==========================================
    
    const fileInput = document.getElementById('resume');
    const fileNameDisplay = document.getElementById('file-name-display');
    const dropZone = document.getElementById('drop-zone');

    // Solo ejecutamos este código si estamos en una página que tenga el campo de subir archivo (work-with-us.html)
    if (fileInput && fileNameDisplay && dropZone) {

        // Cuando el usuario selecciona un archivo a través del explorador de Windows/Mac
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0].name;
            // Cambiamos el texto para mostrar el nombre del archivo en verde/azul y confirmar que se ha subido
            fileNameDisplay.innerHTML = `<span style="color: #3A8ECE; font-weight: 700;">¡Archivo cargado!</span><br>${fileName}`;
            // Cambiamos un poco el color de fondo para dar feedback visual
            dropZone.style.backgroundColor = '#F8FBFF';
            dropZone.style.borderColor = '#3A8ECE';
        });

        // Efectos visuales al arrastrar un archivo por encima (Drag & Drop)
        fileInput.addEventListener('dragenter', () => {
            dropZone.style.backgroundColor = '#F8FBFF';
            dropZone.style.borderColor = '#3A8ECE';
        });

        fileInput.addEventListener('dragleave', () => {
            dropZone.style.backgroundColor = '#FFFFFF';
            dropZone.style.borderColor = '#C2D5E6';
        });
    }

});