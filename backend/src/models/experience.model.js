import mongoose from 'mongoose';

const mongo = mongoose.schema;

const ExpSchema = new mongo({ 
    title:{ 
        type: String,
        required:true
    },
    employment:{ 
        type: String,
        required:true,
    },
    description:{ 
        type: String
    }
},{timestamps:true})

module.exports = mongoose.model('Experience',ExpSchema)