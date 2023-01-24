class ProductManager {
    constructor() {
        this.products = []

    }

    generadorIds =() => {
        const count = this.products.length
        if (count === 0) {
            return 1
        } else (
             + 1
        )
    }

    getProducts = () => {
        return this.products
    }

    addProduct = (tittle, description, price, thumbnail, code, stock) => {
        const id = this.generadorIds()
        //validar code no repetido
       if (this.products.forEach(elem => elem.code === code)) {
        console.error("el producto ya existe");
        return
       }
       //validar la obligatoriedad de los 6 parámetros
       if (!tittle || !description || !price || !thumbnail || !code || !stock) {
        console.error("el producto ya existe, faltan datos");
        return
       }
        this.products.push({
            id,
            tittle,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }
}

const productManager = new ProductManager()
productManager.addProduct('Linterna', '2000Mhp', $100, 'https://www.jaype.com/static/uploads/23929jaypemenorca.jpg', '101010', '20' )
console.log (productManager.getProducts())
productManager.addProduct('Vaso', 'Losa', $5, 'https://www.jaype.com/static/uploads/23929jaypemenorca.jpg', '101011', '20' )
productManager.addProduct('Plato', 'Losa', $100, 'https://www.jaype.com/static/uploads/23929jaypemenorca.jpg', '101011', '20' )
productManager.addProduct('Plato',  $100, 'https://www.jaype.com/static/uploads/23929jaypemenorca.jpg', '101011', '20' )

