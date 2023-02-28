import express from 'express'
import { createSucursal, getAllSucursal, getSucursal, updateSucursal, deleteSucursal } from '../controllers/SucursalController.js'
const router = express.Router()

router.get('/', getAllSucursal)
router.get('/:id', getSucursal)
router.post('/', createSucursal)
router.put('/:id', updateSucursal)
router.delete('/:id', deleteSucursal)

export default router