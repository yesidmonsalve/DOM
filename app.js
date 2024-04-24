import { generarContenidoSeccion1 } from './seccion1.js';
import { generarContenidoSeccion2 } from './seccion2.js';
import { generarContenidoSeccion3 } from './seccion3.js';


const seccion1 = generarContenidoSeccion1();
const seccion2 = generarContenidoSeccion2();
const seccion3 = generarContenidoSeccion3();

document.getElementById('seccion1').appendChild(seccion1);
document.getElementById('seccion2').appendChild(seccion2);
document.getElementById('seccion3').appendChild(seccion3);
