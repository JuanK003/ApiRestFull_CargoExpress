import  DepartamentoModel  from "../models/DepartamentoModel.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllDepartamento = async (req, res) => {
    try {
        const departamentos = await DepartamentoModel.findAll()
        res.json(departamentos)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getDepartamento = async(req, res)=>{
    try {
        const departamento = await DepartamentoModel.findAll({
            where:{id:req.params.id}
        })
        res.json(departamento[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createDepartamento = async (req, res)=>{
    try {
        await DepartamentoModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateDepartamento = async (req, res)=>{
    try {
        await DepartamentoModel.update(req.body,{
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
export const deleteDepartamentoo = async (req, res)=>{
    try {
        await DepartamentoModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}