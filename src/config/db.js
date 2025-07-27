import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const nombreDB = "pizzeria";
const cliente = new MongoClient(uri);

export async function connection() {
    await cliente.connect ();
    console.log("Conectado a MongoDB");
    return cliente.db (nombreDB);
}

export { cliente };