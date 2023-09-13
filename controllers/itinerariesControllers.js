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
    getItineraryById: async (req, res) => {
        try {
            // console.log(req.params)
            const oneItinerary = await Itinerary.findById(req.params.id)
            // .populate('company', 'contact_info name')
            // .populate('user');

            if (oneItinerary) {
                return res.status(200).json({
                    success: true,
                    event: oneItinerary
                })
            }
            return res.status(404).json({
                success: false,
                message: 'No se pudo encontrar el evento'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener el evento'
            })
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