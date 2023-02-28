import MunicipioModel from "../models/MunicipioModel.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllMunicipio = async (req, res) => {
    try {
        const municipios = await MunicipioModel.findAll()
        res.json(municipios)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getMunicipio = async(req, res)=>{
    try {
        const municipio = await MunicipioModel.findAll({
            where:{id:req.params.id}
        })
        res.json(municipio[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createMunicipio = async (req, res)=>{
    try {
        await MunicipioModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateMunicipio = async (req, res)=>{
    try {
        await MunicipioModel.update(req.body,{
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
export const deleteMunicipio = async (req, res)=>{
    try {
        await MunicipioModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}