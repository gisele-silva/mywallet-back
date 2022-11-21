import db from "../database/mongodb.js"

export async function userMiddLeware (req, res, next) {
    const autorizacao = req.headers
    const token = autorizacao.replace('Bearer', '').trim()

    if (!token) return res.status(401).send("Token inexistente")

    try {
        const sessao = await db.collection('sessao').findOne({token})
        if (!sessao) return res.status(401).send("Sessao inexistente")

        const user = await db.collection ("users").findOne({_id: sessao.userId})
        if (!user) return res.statis(401).send("Usuário inexistente")

        res.locals.user = user
        next()
    } catch (error) {
        console.log("Erro no usuário")
        console.log(error)
        return res.sendStatus(500)
    }
}