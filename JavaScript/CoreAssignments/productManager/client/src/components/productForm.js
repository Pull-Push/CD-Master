import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8008/api/product',{
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            console.log(res.data.title);

        })
        .catch(err=>console.log(err));

    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label> Title </label>
                <input type='text' onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div>
                <label> Price </label>
                <input type='number' onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div>
                <label> Description </label>
                <input type='text' onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <input type='submit'></input>
        </form>
    )
}

export default ProductForm;