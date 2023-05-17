const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
    name:{type: String, 
        required: [true,"Name Is Required"],
        validate: {
            validator: async function(name) {
            const animal = await this.constructor.findOne({ name });
            if(animal) {
                if(this.id === animal.id) {
                return true;
                }
                return false;
            }
            return true;
            },
            message: props => 'Name is already in use.'
        },
        minLength:[3, "Name Must Be At Least 3 Characters"]
    },
    type:{type: String,
        required:[true, "Type is Required"],
        minLength:[3, "Type Must Be At Least 3 Characters"]

    },
    
    description:{ type: String,
        required:[true, "Description is Required"],
        minLength:[3, "Description Must Be At Least 3 Characters"]
    },
    
    likes:{type: Number,
        default:0
    },
    
    skillOne:{type: Array},
    skillTwo:{type: Array},
    skillThree:{type: Array}


},{timestamps: true});
module.exports = mongoose.model('Pet', PetSchema);