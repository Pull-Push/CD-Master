import React, { useState } from 'react';
import axios from 'axios';

const PetForm = (props) => {
    const { pets, setPets } = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [details, setDetails] = useState("");
    const [likes, setLikes] = useState(0);
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [errors, setErrors] = useState([])
    const [nameerror, setNameError] = ("")
    const submitHandler = () => {
        axios.post('http://127.0.0.1:8008/api/pet', {
            name,
            price,
            details,
            type,
            skillOne,
            skillTwo,
            skillThree,
            likes
        })
            .then(res => {
                setPets([...pets, res.data]);
            })
            .catch(err =>{setErrors(err.response.data.errors)
            });

            }
    return (
        <div>
            <h1>Pet Shelter</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Name </label>
                    {
                        errors.name?
                        <p>{errors.name.message}</p>:null
                    }
                    <input type='text' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label> Type: </label>
                    {
                        errors.type?
                        <p>{errors.type.message}</p>:null
                    }
                    <input type='text' onChange={(e) => setType(e.target.value)} />
                </div>
                <div>
                    <label> Adoption Fee: </label>
                    {
                        errors.price?
                        <p>{errors.price.message}</p>:null
                    }
                    <input type='number' onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label> Details: </label>
                    {
                        errors.details?
                        <p>{errors.details.message}</p>:null
                    }
                    <input type='text' onChange={(e) => setDetails(e.target.value)} />
                </div>
                <div>
                    <label> Skills: </label>
                    <input type='text' onChange={(e) => setSkillOne(e.target.value)} />
                    <input type='text' onChange={(e) => setSkillTwo(e.target.value)} />
                    <input type='text' onChange={(e) => setSkillThree(e.target.value)} />

                </div>
                <input type='submit'></input>
            </form>
            <hr></hr>
        </div>
    )
}

export default PetForm;