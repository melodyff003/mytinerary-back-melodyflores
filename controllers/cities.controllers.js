import Cities from "../models/Cities.js"

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if(req.query.city){
            queries.city = new RegExp(`^${req.query.city}`, 'i')
        }
        try{
            //objeto del find es el FILTRO
            const city = await Cities.find(queries) //mongoose lo usa con un modelo

            if(city.length > 0){
                return res.status(200).json({
                    success: true,
                    city
                })
            }
            return res.status(404).json({
                success: false,
                message: "Not found city"
            })

        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error while getting city"
            })
        }
    },
    getCityById: async (req, res)=>{
        try{
            console.log(req.params);
            const oneCity = await Cities.findById(req.params.id)
            
            if(oneCity){     
                return res.status(200).json({
                    success: true,
                    city: oneCity
                })
            }
            return res.status(404).json({
            success: false,
            message: "id not found"
            })
        } catch(error){
            res.status(500).json({
                success: false,
                message: "Error while getting the city"
            })
        }
    } ,
    createCities: async (req, res)=> {
        try{
            const newCity = await Cities.create(req.body); 
            return res.status(201).json({
                success: true,
                message: "No errors!"
            })

        } catch(error) {
            res.status(500).json({
                success: false,
                message: "Error while creating city"
            })
        }
        //create recibe un objeto q voy a cargar a mi base de datos  
        return res.status(201).json({
            success: true, 
            message: 'City created'
        })
    },
    updateCity: async (req, res) => {
        try{
            await Cities.updateOne({_id: req.params.id}, req.body)

            return res.status(200).json({
                success:true, 
                message: 'City updated succcessfully'
            })

        } catch(error){
            console.log(error);
            return res.status(500).json({
                success: fail, 
                message: 'Error while updating city'
            })
        }
    },
    deleteCity: async (req, res) => {
        try{
            await Cities.deleteOne({_id: req.params.id})

            return res.status(200).json({
                success: true,
                message: 'City deleted successfully'
            })

        } catch(error){
            console.log(error);
            return res.status(500).json({
                success: fail, 
                message: 'Error while deleting city'
            })
        }
    }
}

export default controller;