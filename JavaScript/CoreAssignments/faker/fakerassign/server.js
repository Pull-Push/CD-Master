const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;


const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.database.mongodbObjectId()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address:{
            number: faker.address.buildingNumber(),
            street:faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            county: faker.address.country()
        }
    };
    return newCompany;
};



const randomUser = createUser();
const randomCompany = createCompany();

const bothObjects = {
    user: createUser(),
    company: createCompany()
}

app.get("/api", (req, res) => {
    res.json({message:"Hello world"});
});

app.get("/api/users/new", (req, res) => {
    res.json(randomUser);
});

app.get("/api/companies/new", (req,res) =>{
    res.json(randomCompany);
});

app.get("/api/user/company", (req,res) =>{
    res.json(bothObjects);
});


app.listen(port,() => console.log("Listening on port:"));