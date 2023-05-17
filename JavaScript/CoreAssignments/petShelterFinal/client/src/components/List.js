import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PetList = (props) => {
    const [ pets, setPets ] = useState([]);


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
            <div className="d-flex justify-content-between">
            <h1>Pet Shelter</h1>
            <Link to={`/pets/create`}>add a pet to the shelter</Link>
            </div>
            <div className="d-flex justify-content-beginning">
            <h3> These pets are looking for homes</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
            {
                pets?.map((pet, index) => {
                    return (
                        <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><Link to={`/edit/${pet._id}`}>  Edit | </Link></td>
                            <td><Link to={`/pet/${pet._id}`}> Details </Link></td>
                        </tr>
                    )
                })
            }    
            </th>
                </tr>
                </tbody>
            
            </table>
        </div>
    )
}
export default PetList;