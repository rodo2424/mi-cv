# CV de Rodrigo Alejandro López Flores

Sitio estático en español, inglés y portugués. La portada conserva la presentación editorial y la línea de tiempo. `cv.html` ofrece una versión breve para postular y descargar los PDFs de dos páginas.

## Actualizar el contenido

Los datos y las traducciones se mantienen en `content.js`, compartido por las dos versiones. `app.js` controla la portada; `resume.js`, el CV breve; `postulacion.js`, las cartas y los correos. La página `postulacion.html` permite personalizar una carta y un correo con empresa y puesto; los campos no se almacenan. El enlace de correo abre un borrador para revisar y adjuntar el CV.

Los archivos `cv-es.pdf`, `cv-en.pdf`, `cv-pt.pdf`, `carta-es.pdf`, `carta-en.pdf` y `carta-pt.pdf` son documentos generados: deben actualizarse cuando cambie el contenido o el formato del CV breve.

Los datos adicionales provienen del texto de LinkedIn que compartió el titular. Se conserva su corrección: Asistente de Distribución termina en febrero de 2026. La investigación de maestría se presenta en desarrollo. Los resultados cuantitativos deben añadirse únicamente cuando se pueda confirmar su alcance, período y fuente.

## Ejecutar localmente

Desde la carpeta del repositorio:

```sh
python3 -m http.server 8001 --bind 127.0.0.1
```

El sitio no necesita instalación de paquetes ni un proceso de compilación. Comprobar la portada, la timeline, el cambio de idioma y `cv.html` en escritorio y móvil.

## Regenerar los PDFs

Para esta operación de mantenimiento se necesitan Node.js, Playwright y Chromium. En el entorno usado para preparar el CV ya están disponibles. Con el servidor anterior activo:

```sh
node scripts/export-pdfs.cjs
```

El script utiliza Chromium en `/usr/bin/chromium` y el servidor local del puerto 8001. Se pueden configurar otras ubicaciones con `CV_CHROMIUM_PATH` y `CV_BASE_URL`. Genera el CV y la carta general en los tres idiomas y comprueba que el servidor entrega los PDFs. Para regenerar solo las cartas, usar `node scripts/export-pdfs.cjs --letters`. Revisar que el CV siga teniendo dos páginas A4, que la carta general tenga una página y que se pueda extraer el texto; el texto del enlace de descarga debe reflejar el número real de páginas.

Publicar todos los archivos necesarios en la raíz de `main`: HTML, JavaScript, CSS y PDFs. GitHub Pages sirve el sitio desde esa rama.

La guía `GUIA_POSTULACIONES.md` contiene sugerencias para adaptar el perfil a ofertas y preparar entrevistas; sus borradores de LinkedIn no se publicaron en la cuenta del titular.
