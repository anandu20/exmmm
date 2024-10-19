import mongoose, { mongo } from "mongoose";
const employSchema=new mongoose.Schema({
    empid:{type:String},
    name:{type:String},
    email:{type:String},
});
export default mongoose.model.Employs||mongoose.model("Employ",employSchema);