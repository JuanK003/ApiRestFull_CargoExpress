import  RolModel  from "../models/RolModel.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllRol = async (req, res) => {
    try {
        const roles = await RolModel.findAll()
        res.json(roles)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getRol = async(req, res)=>{
    try {
        const rol = await RolModel.findAll({
            where:{id:req.params.id}
        })
        res.json(rol[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createRol = async (req, res)=>{
    try {
        await RolModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateRol = async (req, res)=>{
    try {
        await RolModel.update(req.body,{
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
export const deleteRol = async (req, res)=>{
    try {
        await RolModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}