const fs = require('fs');

// Lee el contenido del archivo
fs.readFile('urls.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
w2
    // Expresión regular simplificada para encontrar URLs
    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = data.match(urlRegex);

    if (!urls) {
        console.log('No se encontraron URLs en el archivo.');
        return;
    }

    // Contar la frecuencia de cada URL
    const urlCount = {};
    urls.forEach(url => {
        urlCount[url] = (urlCount[url] || 0) + 1;
    });

    // Encontrar la URL que aparece con menos frecuencia
    let uniqueUrl = null;
    for (const [url, count] of Object.entries(urlCount)) {
        if (count === 1) {
            uniqueUrl = url;
            break;
        }
    }

    if (uniqueUrl) {
        console.log('La URL diferente es:', uniqueUrl);
    } else {
        console.log('No se encontró una URL única.');
    }
});
