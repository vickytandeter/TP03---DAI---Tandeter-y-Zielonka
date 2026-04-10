const fs = require('fs')

function CopiarArchivo()
{
    fs.readFile('./src/modules/productos.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err)
            return
        }
        try {
            const productos = JSON.parse(data)

            console.log('Lista de productos:')
            productos.forEach((producto, index) => {
                console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`)
            });

        } catch (error) {
            console.error('Error al parsear el JSON:', error)
        }
    })
}

CopiarArchivo()
