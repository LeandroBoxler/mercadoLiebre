const crypto = require('crypto');

function subirProducto(name, price,discount, category,description,mainImage) {
    this.id =  crypto.randomUUID()
    this.name = name.trim()
    this.price = +price
    this.discount = +discount.trim() <= 100? +discount.trim(): 0;
    this.category = category || null
    this.description = description.trim()
    this.image = mainImage ? mainImage.filename : null;

}
module.exports = subirProducto