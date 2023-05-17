import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const PetForm = (props) => {
    const [ pets, setPets ] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [likes, setLikes] = useState(0);
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [errors, setErrors] = useState([])
    const [nameerror, setNameError] = ("")

    const navigate = useNavigate()
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8008/api/pet/new', {
            name,
            description,
            type,
            skillOne,
            skillTwo,
            skillThree,
            likes
        })
            .then(res => {
                setPets([...pets, res.data]);
                console.log(res)
                navigate('/')
            })
            .catch(err =>{setErrors(err.response.data.errors)
                console.log(err)
            });

            }
    return (
        <div>
            <div className="d-flex justify-content-between">
            <h1>Pet Shelter</h1>
            <Link to={"/"}>Back To home</Link>
            </div>
            <div className="d-flex justify-content-beginning">
            <h3> Know a et needing a home?</h3>
            </div>
            <form className="form-group" onSubmit={submitHandler}>
                <div>
                    <label> Name </label>
                    {
                        errors.name?
                        <p>{errors.name.message}</p>:null
                    }
                    <input className='form-control' type='text' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label> Pet Type: </label>
                    {
                        errors.type?
                        <p>{errors.type.message}</p>:null
                    }
                    <input className='form-control'type='text' onChange={(e) => setType(e.target.value)} />
                </div>
                
                <div>
                    <label> Description: </label>
                    {
                        errors.description?
                        <p>{errors.description.message}</p>:null
                    }
                    <input className='form-control'type='text' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label> Skills (optional): </label>
                    <label> Skill 1: </label>
                    <input className='form-control col-xs-2' type='text' onChange={(e) => setSkillOne(e.target.value)} />
                    <label> Skill 2: </label>

                    <input className='form-control' type='text' onChange={(e) => setSkillTwo(e.target.value)} />
                    <label> Skill 3: </label>

                    <input className='form-control' type='text' onChange={(e) => setSkillThree(e.target.value)} />

                </div>
                <input type='submit' value={"add pet"}></input>
            </form>
            <hr></hr>
        </div>
    )
}

export default PetForm;