// Función para generar el contenido de la sección 1 con una imagen
const generarContenidoSeccion2 = () => {
    const seccion2 = document.createElement('div');
    seccion2.classList.add('Tarjeta');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Sumas';
    seccion2.appendChild(titulo);

    const parrafo = document.createElement('p');
    parrafo.textContent = 'En este apartado puedes realizar Sumas que necesiten resolver.';
    seccion2.appendChild(parrafo);

    // Crear elemento de imagen y establecer su fuente
    const imagen = document.createElement('img');
    imagen.classList.add('Img1');
    imagen.src = './img/suma.png'; // Ejemplo de imagen
    imagen.alt = 'Sumitas';
    seccion2.appendChild(imagen);

    // Crear botón y asociar evento de clic para mostrar modal
    const boton = document.createElement('button');
    boton.className = 'Button';
    boton.textContent = 'Haz clic aquí';
    boton.addEventListener('click', () => {
        // Mostrar el modal
        document.getElementById('modal').style.display = 'block';
    });
    seccion2.appendChild(boton);

    // Crear modal (ventana emergente) y contenido
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Botón para cerrar el modal
    const closeModal = document.createElement('span');
    closeModal.className = 'close';
    closeModal.innerHTML = '&times;';
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    const form = document.createElement('form');

form.innerHTML = `
    <h2>Calculadora de Suma</h2>
    <label for="num1">Número 1:</label>
    <input type="number" id="num1" name="num1">
    <br>
    <label for="num2">Número 2:</label>
    <input type="number" id="num2" name="num2">
    <br>
    <button type="button" id="calculate">Calcular</button>
    <div id="resultado"></div>
`;

form.querySelector('#calculate').addEventListener('click', () => {
    const num1 = form.querySelector('#num1').value;
    const num2 = form.querySelector('#num2').value;

    // Validación para campos vacíos
    if (num1 === '' || num2 === '') {
        form.querySelector('#resultado').textContent = 'Por favor, completa ambos campos';
        return;
    }

    // Conversión a float y validación para "NaN"
    const valor1 = parseFloat(num1);
    const valor2 = parseFloat(num2);

    const suma = valor1 + valor2;
    form.querySelector('#resultado').textContent = `Resultado: ${suma}`;
});

    
    // Agregar contenido al modal
    modalContent.appendChild(closeModal);  // Asegúrate de que esto no se repita dos veces
    modalContent.appendChild(form);        // Asegúrate de que este elemento esté en el contenedor correcto
    modal.appendChild(modalContent);       // Agregar contenido al modal
    seccion2.appendChild(modal);           // Agregar el modal a seccion2
    
    return seccion2;
};

// Estilos para el modal
const estiloModal = `
.modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    padding: 20px;
}

.modal-content {
    text-align: left;
}

.close {
    cursor: pointer;
    float: right;
    font-size: 24px;
}

#resultado {
    font-weight: bold;
    margin-top: 10px;
}
`;

// Agregar estilos al documento
const styleElement = document.createElement('style');
styleElement.textContent = estiloModal;
document.head.appendChild(styleElement);

export { generarContenidoSeccion2 };