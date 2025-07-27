export default class Pedido {
    constructor(clienteId, pizzas, total, repartidorAsignado) {
        this.clienteId = clienteId;
        this.pizzas = pizzas;
        this.total = total;
        this.fecha = new Date();
        this.repartidorAsignado = repartidorAsignado;
    }

    toDocument() {
        return {
            clienteId: this.clienteId,
            pizzas: this.pizzas,
            total: this.total,
            fecha: this.fecha,
            repartidorAsignado: this.repartidorAsignado,
        };
    }
}