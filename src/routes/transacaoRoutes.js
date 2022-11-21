import { Router } from "express";
import {cadastrarTransacao, pegarTransacoes} from "../controllers/transacaoController.js"
import {userMiddLeware} from "../middleware/userMiddleware.js"

const router = Router ()

router.get("/transacoes", userMiddLeware, pegarTransacoes)
router.post("/transacoes", userMiddLeware, cadastrarTransacao)

export default router