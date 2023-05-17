const Pet = require('../models/pet.model');

module.exports.createPet = (req, res) =>{
    Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllPets = (req, res) =>{
    Pet.find({}).sort({type: 'asc'})
    .then(pets => res.json(pets))
    .catch(err => res.status().json(err));
}

module.exports.getPet = (req, res) =>{
    Pet.findById({_id:req.params.id})
    .then(pet => res.json(pet))
    .catch(err => res.json(err));
}

module.exports.updatePet = (req, res) =>{
    Pet.findOneAndUpdate({_id:req.params.id} ,req.body,{new:true})
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.status(400).json(err))
}

module.exports.likePet = (req, res) =>{
    Pet.findOneAndUpdate({_id:req.params.id} ,{$inc:{likes:1}}, {new:true})
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id:req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}