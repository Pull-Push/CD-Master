import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PetList = (props) => {
    const { removeFromDom, pets, setPets } = props;

    const deletePet = (id) => {
        axios.delete("http://localhost:8008/api/pet/" + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8008/api/pet")
            .then((res) => {
                console.log(res)
                setPets(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h2>All pets</h2>
            {
                pets.map((pet, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/pet/${pet._id}`}> {pet.name} </Link>
                            <p>Amount of Likes: {pet.likes}</p>
                            <p>Type of Animal: {pet.type}</p>
                            <Link to={`/edit/${pet._id}`}>  Edit</Link>
                            <div>
                                <button onClick={() => { deletePet(pet._id) }}>Delete Me!</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PetList;