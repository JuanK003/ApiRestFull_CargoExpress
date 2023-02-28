import  SucursalModel  from "../models/SucursalModel.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllSucursal = async (req, res) => {
    try {
        const sucursales = await SucursalModel.findAll()
        res.json(sucursales)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getSucursal = async(req, res)=>{
    try {
        const sucursal = await SucursalModel.findAll({
            where:{id:req.params.id}
        })
        res.json(rol[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createSucursal = async (req, res)=>{
    try {
        await SucursalModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateSucursal = async (req, res)=>{
    try {
        await SucursalModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro
export const deleteSucursal = async (req, res)=>{
    try {
        await SucursalModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}