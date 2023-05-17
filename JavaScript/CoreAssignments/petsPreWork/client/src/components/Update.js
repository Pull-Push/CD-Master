import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(Number);
    const [details, setDetails] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8008/api/pet/" + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setPrice(res.data.price);
                setDetails(res.data.details);
            })
            .catch(err => console.log(err))
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8008/api/edit/" + id, {
            name,
            type,
            price,
            details
        })
            .then(() => {
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update Pet</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Adoption Fee:</label>
                    <input type='number' name='price' value={price} onChange={(e) => { setPrice(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Details:</label>
                    <input type='text' name='details' value={details} onChange={(e) => { setDetails(e.target.value) }} ></input>
                </div>
            <input type="Submit"></input>
            </form>
        </div>
    );
}

export default Update;
