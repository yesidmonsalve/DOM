// Función para generar el contenido de la sección 1 con una imagen
const generarContenidoSeccion3 = () => {
    const seccion3 = document.createElement('div');
    seccion3.classList.add('Tarjeta');
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Multiplicacion';
    seccion3.appendChild(titulo);
    
    const parrafo = document.createElement('p');
    parrafo.textContent = 'En este apartado puedes realizar multiplicaciones que necesiten resolver.';
    seccion3.appendChild(parrafo);

    // Crear elemento de imagen y establecer su fuente
    const imagen = document.createElement('img');
    imagen.classList.add('Img1')
    imagen.src = './img/Multi.png';// Ejemplo de imagen
    imagen.alt = 'Descripción de la imagen';
    seccion3.appendChild(imagen);

     // Crear botón
     const boton = document.createElement('button');
     boton.classList.add('Button');
     boton.textContent = 'Haz clic aquí';
    boton.addEventListener('click', () => {
         document.getElementById('modal').style.display ='block';
     });
     seccion3.appendChild(boton);
 
     //Crear modal y Contenido
     const modal = document.createElement('div');
     modal.id = 'modal';
     modal.className = 'modal';
 
     const modal_content = document.createElement('div');
     modal_content.className = 'modal_content';
     
     // Boton de cerrar vetana
     const closeModal = document.createElement('span');
     closeModal.className = 'close';
     closeModal.innerHTML = '&times;';
     closeModal.addEventListener('click', () =>{
         modal.style.display = 'none';
     });
 
     //Formulario para Restar dos números
     const form = document.createElement('form');
     form.innerHTML=`
     <h2>Calculadora de Multiplicaciones</h2>
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
         const num1 = parseFloat(form.querySelector('#num1').values);
         const num2 = parseFloat(form.querySelector('#num2').values);
         const suma = num1 - num2;
 
         //Mostrar el resultado
         form.querySelector('#resultado').textContent = `Resultado: ${suma}`;
     });
 
     // Agregar contenido al modal
     modal_content.appendChild(closeModal);
     modal_content.appendChild(form);
     modal.appendChild(modal_content);
     seccion3.appendChild(modal);
 
     return seccion3;
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
 
 
 export { generarContenidoSeccion3 };
 