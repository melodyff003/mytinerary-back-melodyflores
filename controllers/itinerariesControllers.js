import Itinerary from "../models/Itinerary.js";

const controller = {
    getItineraries: async (req, res, next) => {

        const itineraries = await Itinerary.find()
        res.json({
            data: itineraries,
            success: true,
        })
    },
    createItinerary: async (req, res, next) => {
        console.log(req.body);

        const newItinerary = await Itinerary.create(req.body)
        res.json({
            data: newItinerary,
            success: true,
        })
    },
    deleteItinerary: async (req, res, next) => {
        const { id } = req.params

        const updateItinerary = await Itinerary.findOneAndDelete({ _id: id })
        res.json({
            data: updateItinerary,
            success: true,
        })
    },
    updateItinerary:    async (req, res, next) => {
        console.log(req.body);
        const { id } = req.params

        const updatedItinerary = await Itinerary.findOneAndUpdate({ _id: id }, req.body)
        res.json({
            data: updatedItinerary,
            success: true,
        })
    },
    getItineraryById: async (req, res, next) => {
        try {
            const { name } = req.params
            const itinerary = await Itinerary.findOne({
                name: { $regex: new RegExp("^" + name.toLowerCase(), "i") }
            })

            console.log(itinerary);
            res.json({
                data: itinerary,
                success: true,
            })
        } catch (error) {
            console.log(error);
        }

    },
    addItinerary: async (req, res) => {
        const city = await Itinerary.findById(req.params.id) //no guarda el id de la ciudad por lo q' luego no puede leer .itineraries
        const itineraryPicked = req.body.itinerary
        console.log(city);
        console.log(itineraryPicked);
        console.log(req.body);
        if(city == null){
            city.itineraries.push(req.body.itinerary)
        }else{
            if (city.itineraries.find(fav => String(fav) === String(itineraryPicked))) {
                return res.json({
                    success: false,
                })
            }
        }
        city.itineraries = [...city.itineraries, itineraryPicked]
        await city.save()
    
        console.log(city);
        res.json({
            success: true,
            city
        })
    }
}

export default controller;