import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const navigate = useNavigate()
    const { id } = useParams();
    
    const deleteProduct = (id) => {
        axios.delete("http://localhost:8008/api/product/" + id)
        .then(() => {
            navigate("/");
        })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get("http://localhost:8008/api/product/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
            <div>
                <button onClick={() => { deleteProduct(product._id) }}>Delete Me!</button>
            </div>
        </div>
    );
}

export default Detail;
