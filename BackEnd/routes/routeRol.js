import express from 'express'
import { createRol, getAllRol, getRol, updateRol, deleteRol } from '../controllers/RolController.js'
const router = express.Router()

router.get('/', getAllRol)
router.get('/:id', getRol)
router.post('/', createRol)
router.put('/:id', updateRol)
router.delete('/:id', deleteRol)

export default router