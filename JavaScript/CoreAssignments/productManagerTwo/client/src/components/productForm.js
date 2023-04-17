import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const { products, setProducts } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8008/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                // console.log(res);
                // console.log(res.data.title);
                setProducts([...products, res.data]);

            })
            .catch(err => console.log(err));

    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Title </label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Price </label>
                    <input type='number' onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label> Description </label>
                    <input type='text' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type='submit'></input>
            </form>
            <hr></hr>
        </div>
    )
}

export default ProductForm;