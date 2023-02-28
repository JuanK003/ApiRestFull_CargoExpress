import  UsuarioModel  from "../models/UsuarioModel.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllUsuario = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getUsuario = async(req, res)=>{
    try {
        const usuario = await UsuarioModel.findAll({
            where:{id:req.params.id}
        })
        res.json(usuario[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createUsuario = async (req, res)=>{
    try {
        await UsuarioModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateUsuario = async (req, res)=>{
    try {
        await UsuarioModel.update(req.body,{
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
export const deleteUsuario = async (req, res)=>{
    try {
        await UsuarioModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}