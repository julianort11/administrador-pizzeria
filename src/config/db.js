import { MongoClient } from "mongodb";

const uri = "";
const nombreDB = "pizzeria";
const cliente = new MongoClient(uri);

export async function connection() {
    await cliente.connect ();
    return cliente.db (nombreDB);
}

