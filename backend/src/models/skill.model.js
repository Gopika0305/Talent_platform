import mongoose from 'mongoose';

const mongo = mongoose.schema;

const SkillSchema = new mongo({ 
     title:{ 
        type: String,
        required:true
     },
     ratings:{ 
        type: Number,
        default:0
     }
},{timestamps:true})


module.exports = mongoose.model('Skill',SkillSchema)