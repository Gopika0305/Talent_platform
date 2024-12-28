import mongoose from 'mongoose';

const mongo = mongoose.Schema;

const JobSchema = new mongo({ 
     title:{ 
        type: String,
        required:true
     },
     description:{ 
         type: String,
         required:true
     },
     ratings:{ 
        type: Number,
        default:0
     }
},{timestamps:true})

const Skill = mongoose.model('Skill',JobSchema)

export default Skill