 export default class Ingrediente {
    constructor(nombre, tipo, stock) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.stock = stock;
    }

    toDocument() {
        return {
            nombre: this.nombre,
            tipo: this.tipo,
            stock: this.stock,
        };
    }
 }