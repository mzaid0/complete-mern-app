import { Service } from "../models/service.model.js";

export const servicesController = async (req,res)=>{
    try {
        const services = await Service.find()
        if(services.length === 0) {
            return res.status(404).json({msg:"No services found"})
        }
        res.status(200).json(services)
    } catch (error) {
        next(error);
    }
}