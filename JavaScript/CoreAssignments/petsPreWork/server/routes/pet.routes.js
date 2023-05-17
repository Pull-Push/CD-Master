const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.post('/api/pet', PetController.createPet);
    app.get("/api/pet/:id", PetController.getPet);
    app.get('/api/pet', PetController.getAllPets);
    app.put('/api/edit/:id',PetController.updatePet);
    app.put('/api/like/:id',PetController.likePet);
    app.delete('/api/pet/:id', PetController.deletePet);
}