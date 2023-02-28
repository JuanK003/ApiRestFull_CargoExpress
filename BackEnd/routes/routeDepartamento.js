import express from 'express'
import { createDepartamento, deleteDepartamentoo, getAllDepartamento, getDepartamento, updateDepartamento } from '../controllers/DepartamentoController.js'
const router = express.Router()

router.get('/', getAllDepartamento)
router.get('/:id', getDepartamento)
router.post('/', createDepartamento)
router.put('/:id', updateDepartamento)
router.delete('/:id', deleteDepartamentoo)

export default router