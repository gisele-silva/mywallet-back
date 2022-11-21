import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
let db;
console.log(process.env);

const mongoClient = new MongoClient("mongodb://localhost:27017");
console.log(process.env);

try {
   await mongoClient.connect();
   db = mongoClient.db(process.env.MONGO_DB);
   console.log("banco de dados conectado")
} catch (error) {
    console.error("Erro ao conectar o banco de dados")
}

export default db;