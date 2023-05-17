import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8008/api/pet/" + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne)
                setSkillTwo(res.data.skillTwo)
                setSkillThree(res.data.skillThree)

            })
            .catch(err => console.log(err))
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8008/api/edit/" + id, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(() => {
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Edit {name}</h1>
            <Link to={"/"}>Back To home</Link>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Pet Name:</label>
                    <input type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Pet Type:</label>
                    <input type='text' name='type' value={type} onChange={(e) => { setType(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Pet Description:</label>
                    <input type='text' name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Skills(Optional)</label>
                    <label>Skill One:</label>
                    <input type='text' name='skillOne' value={skillOne} onChange={(e) => { setSkillOne(e.target.value) }} ></input>
                </div>
                <div>
                    <label> Skill Two:</label>
                    <input type='text' name='skillTwo' value={skillTwo} onChange={(e) => { setSkillTwo(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Skill Three:</label>
                    <input type='text' name='skillThree' value={skillThree} onChange={(e) => { setSkillThree(e.target.value) }} ></input>
                </div>

            <input type="Submit"></input>
            </form>
        </div>
    );
}

export default Update;
