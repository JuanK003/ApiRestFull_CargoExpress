import express from 'express'
import { createUsuario, getAllUsuario, getUsuario, updateUsuario, deleteUsuario } from '../controllers/UsuarioController.js'
const router = express.Router()

router.get('/', getAllUsuario)
router.get('/:id', getUsuario)
router.post('/', createUsuario)
router.put('/:id', updateUsuario)
router.delete('/:id', deleteUsuario)

export default router