import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(Number);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8008/api/product/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8008/api/edit/" + id, {
            title,
            price,
            description
        })
            .then(() => {
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input type='text' name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Price:</label>
                    <input type='text' name='price' value={price} onChange={(e) => { setPrice(e.target.value) }} ></input>
                </div>
                <div>
                    <label>Description:</label>
                    <input type='text' name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} ></input>
                </div>
            <input type="Submit"></input>
            </form>
        </div>
    );
}

export default Update;
