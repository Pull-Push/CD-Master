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
        minLength:[3]
    },
    type:{type: String,
        required:[true, "Type is Required"],
    },
    price:{type: Number,
        required:[true, "Price Is Required"],
        min:[1,"Adoption Price Must Be More Than Zero"]
    },
    
    details:{ type: String,
        required:[true, "Details Are Required"],
        minLength:[3]
    },
    
    likes:{type: Number,
        default:0
    },
    
    skillOne:{type: Array},
    skillTwo:{type: Array},
    skillThree:{type: Array}


},{timestamps: true});
module.exports = mongoose.model('Pet', PetSchema);