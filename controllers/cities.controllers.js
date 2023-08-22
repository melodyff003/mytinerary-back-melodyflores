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
                    succes: true,
                    city
                })
            }
            return res.status(404).json({
                succes: false,
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
                    succes: true,
                    city: oneCity
                })
            }
            return res.status(404).json({
            succes: false,
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
    }
}

export default controller;