# Ciao, amore! 3 · Italiano B1

Sitio de ejercicios interactivos, al estilo Duolingo, basado en el libro **«Ciao, amore! 3 — Corso di italiano per stranieri»** de Roberto Fader (nivel B1).

- **10 unidades, 50 lecciones y 10 pruebas finales** (~690 ejercicios) con los diálogos, textos y la gramática del libro.
- Cada unidad se **desbloquea al aprobar la prueba final** de la unidad anterior; dentro de cada unidad las lecciones se abren en orden.
- Tipos de ejercicio: lectura de diálogos (con audio en italiano), opción múltiple, verdadero/falso, completar con banco de palabras o escribiendo, transformar frases, ordenar palabras, dictado y emparejar.
- 5 corazones por lección (los errores vuelven al final), 3 corazones en la prueba final, XP, racha diaria y objetivo del día.
- «Note di grammatica» de cada unidad, siempre consultables desde el mapa.
- El progreso se guarda en el navegador del estudiante (`localStorage`).
- **Ilustraciones del libro** (`assets/img/uNN-*.jpg`): la portada de cada unidad en su banner, fotos tipo polaroid junto al camino, una imagen al empezar cada lección y en la pantalla final. Nombres: `cover`, `a`–`e` (una por lección) y `test` (prueba final). Para cambiar una imagen basta con reemplazar el archivo.
- **Audio**: usa la mejor voz italiana del navegador (en Chrome, «Google italiano»), lee frase por frase para que Chrome no corte los textos largos, alterna voz masculina y femenina en los diálogos y resalta la línea que se está leyendo. En las frases de escucha, el segundo clic repite más lento. La voz se puede elegir en ⚙️ Impostazioni.

## Publicar con GitHub Pages

Es un sitio estático (HTML + CSS + JS, sin compilación). En GitHub: **Settings → Pages → Deploy from a branch**, elegir la rama y la carpeta `/ (root)`.

Para probarlo en local:

```bash
python3 -m http.server 8000
```

y abrir `http://localhost:8000`.

## Modo docente

Añadiendo `?docente=1` a la URL se abren todas las unidades (útil para revisar el contenido). Se desactiva con `?docente=0` o desde ⚙️ Impostazioni.

## Estructura

```
index.html          página única
css/style.css       estilos (paleta veneciana)
js/app.js           motor: mapa, lecciones, corrección, progreso
js/data/unitNN.js   contenido de cada unidad (ejercicios + notas de gramática)
tools/check-data.js verificación del contenido: node tools/check-data.js
```

Para editar o añadir ejercicios basta con modificar el archivo `js/data/unitNN.js` correspondiente y ejecutar `node tools/check-data.js`.
