import Cities from "../models/Cities.js"

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if(req.query.name){
            queries.name = req.query.name
        }

        try{
            //objeto del find es el FILTRO
            const city = await Cities.find(queries) //mongoose lo usa con un modelo

            return res.status(200).json({
                succes: true,
                city
            })
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error while getting city"
            })
        }
    },
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
    }
}

export default controller;