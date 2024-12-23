import mongoose from 'mongoose';

const mongo = mongoose.Schema;

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

const Skill = mongoose.model('Skill',SkillSchema)

export default Skill