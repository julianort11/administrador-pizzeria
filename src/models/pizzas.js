export default class Pizza {
    constructor (nombre, categoria, precio, ingredientes) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }

    toDocument(){
        return {
            nombre: this.nombre,
            categoria: this.categoria,
            precio: this.precio,
            ingredientesthis: this.ingredientes,
        };
    }
}
