const { Console } = require('console');
const fs = require('fs');
const path = require('path');

let direccionDataProducto = path.join(__dirname, '../data/dataProducto.json')

let controlador = {
    productDetails: function(req, res) {
        const productos = JSON.parse(fs.readFileSync(direccionDataProducto, 'utf-8'));

        const id = req.params.id

        let productoAEnviar = productos.find(producto =>{
            return producto.id == id
        })
        
        res.render('productDetail', {productos : productoAEnviar});
    },
    create: (req, res) => {
		res.render('crearproducto')
	},
    prossCreate: (req, res) => {

		data = req.body

        const productos = JSON.parse(fs.readFileSync(direccionDataProducto, 'utf-8'));

        const newProduct = {
			id: productos[productos.length - 1].id + 1,
			name: data.name,
			price: data.price,
			discount: data.discount,
			category: data.category,
			description: data.description,
			image: "PCG-1.png"
		   }

           productos.push(newProduct);

           fs.writeFileSync(direccionDataProducto, JSON.stringify(productos, null, " "))
           
           res.redirect("/");
    },
        
    edit: (req, res) => {
            const productos = JSON.parse(fs.readFileSync(direccionDataProducto, 'utf-8'));
            const id = req.params.id;
          
            //buscamos el producto
            let productoAEditar = productos.find(producto => {
              return producto.id == id
            });
          
            //inicializamos la variable productoAEditar con el resultado de la función find()
            productoAEditar = productoAEditar;
          
            res.render('editarproducto', {productoAEditar});
    },

    edicion: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(direccionDataProducto, 'utf-8'));
      
        const id = req.params.id;
      
        let productToEdit = productos.find(product => {
          return id == product.id
        });
      
        let editedProduct = {
          id: req.params.id,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          discount: req.body.discount,
          image: productToEdit.image,
          category: req.body.category
        }
      
        // Buscando la posicion en el array del producto a editar
        let indice = productos.findIndex(product => {
          return product.id == req.params.id
        });
      
        productos[indice] = editedProduct;
      
        fs.writeFileSync(direccionDataProducto, JSON.stringify(productos, null, " "));
      
        res.redirect('/')
      },

      destroy : (req, res) => {
		
		//obtenemos el id
		const id = req.params.id;

		//traemos el archivo
		const productos = JSON.parse(fs.readFileSync(direccionDataProducto, 'utf-8'));

		//eliminamos el objeto literal con el id correspondiente
		let productosFiltrados = productos.filter(product => {
			return product.id != id
		});

		//sobrescribimos el JSON
		fs.writeFileSync(direccionDataProducto, JSON.stringify(productosFiltrados, null, " "));

		//redireccionamos
		res.redirect('/')
	}


}

module.exports = controlador