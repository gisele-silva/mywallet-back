import db from "../database/mongodb.js"
import { transacaoSchema } from "../schemas/transacaoSchema.js"
import dayjs from "dayjs"

export async function pegarTransacoes (req, res){
    const {user} = res.locals
    console.log(user._id)
    try {
        const transacoes = await db
        .collection('transacoes')
        .find({userId: user._id})
        .toArray()
        res.status(200).send(transacoes)
    } catch (error) {
        console.error('Não foi possível pegar as transações do usuário');
    }
}

export async function cadastrarTransacao(req, res){
    const { value, description, type } = req.body
    const validate = transacaoSchema.validate({ value, description, type })
    if (validate.error) {
        return res.sendStatus(422)
      }
    
      try {
        const { user } = res.locals
        await db
          .collection('transicao')
          .insertOne({value, description, type, userId: user._id, createAt: dayjs().format('DD/MM')});
        res.sendStatus(201);
      } catch (error) {
        console.error('Erro ao cadastrar transição')
        res.sendStatus(500);
      }
}