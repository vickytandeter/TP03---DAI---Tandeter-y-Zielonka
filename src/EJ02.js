const fs = require('fs');

function agregarProducto(nombre, precio)
{
    fs.readFile('./src/modules/productos.json', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err)
                return
            }
    })
    try{
        let productos = JSON.parse(data)

        const nuevoProducto = {nombre, precio}
        productos.push(nuevoProducto)

        fs.writeFile('./src/modules/productos.json', JSON.stringify(productos, null, 2), (err) => {
                if (err) {
                    console.error('Error al guardar el archivo:', err)
                    return
                }

                console.log('Producto agregado correctamente')
            })
    }
    catch{
        
    }
}