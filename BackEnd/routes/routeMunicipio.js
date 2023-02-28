import express from 'express'
import { createMunicipio, getAllMunicipio, getMunicipio, updateMunicipio, deleteMunicipio } from '../controllers/MunicipioController.js'
const router = express.Router()

router.get('/', getAllMunicipio)
router.get('/:id', getMunicipio)
router.post('/', createMunicipio)
router.put('/:id', updateMunicipio)
router.delete('/:id', deleteMunicipio)

export default router