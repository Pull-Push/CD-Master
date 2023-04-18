import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const { removeFromDom, products, setProducts } = props;

    const deleteProduct = (id) => {
        axios.delete("http://localhost:8008/api/product/" + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8008/api/product")
            .then((res) => {
                console.log(res)
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h2>All products</h2>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/product/${product._id}`}> {product.title} </Link>
                            <Link to={`/edit/${product._id}`}>  Edit</Link>
                            <div>
                                <button onClick={() => { deleteProduct(product._id) }}>Delete Me!</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;