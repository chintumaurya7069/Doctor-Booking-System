import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    image:{type:String},
    speciality:{type:String, require:true},
    degree:{type:String, require:true},
    experience:{type:String, require:true},
    about:{type:String, require:true},
    available:{type:Boolean},
    fees:{type:Number, require:true},
    address:{type:String, require:true},
    date:{type:Number},
    slots_booked:{type:Object,default:{},}

},{minimize:false})
const doctorModel = mongoose.models.doctor || mongoose.model('doctor',doctorSchema)

export default doctorModel