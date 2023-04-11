const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ joke: allJokes })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err})
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke =>{
        console.log(req.body);
        res.json({ joke: newJoke})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    });

} 
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id })
    .then(oneJoke => {
        res.json({ joke: oneJoke })
    })
.catch((err) =>{
res.json({message: "Something went wrong", error: err})
});}

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true }
    )
    .then(updateJoke => {
        res.json({joke: updateJoke })
    })
    .catch((err) => {
        res.json({message: "Somethng went wrong", error: err })
    });}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then(result => {
        res.json({result: result })
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    });
}