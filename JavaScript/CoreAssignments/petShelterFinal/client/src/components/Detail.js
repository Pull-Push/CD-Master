import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';


const Detail = (props) => {
    const [pet, setPet] = useState({});
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams();
    const [likes, setNewLikes] = useState(Number)
    const [clicked, setClicked] = useState(false)
    

    const deletePet = (id) => {
        axios.delete("http://localhost:8008/api/pet/" + id)
        .then(() => {
            navigate("/");
        })
            .catch(err => console.log(err))
    }    
    useEffect(() => {


        axios.get("http://localhost:8008/api/pet/" + id)
            .then(res => {
                setPet(res.data);
                setNewLikes(res.data.likes)
                console.log(typeof res.data.skillOne)
                let combinedSkills = [...res.data.skillOne, ...res.data.skillTwo, ...res.data.skillThree]
                setSkills(combinedSkills)
            })
            .catch(err => console.log(err))
    }, []);

    const likeHandler = (id) => {
        axios.put("http://localhost:8008/api/like/" + id)
            .then(
            setNewLikes(likes+1),
            setClicked(true))
            .catch(err => console.log(err));
    }

    return (

        <div>
            <h1>Pet Shelter</h1>
            <Link to={"/"}>Back To Home</Link>
            
            <h2>Details About {pet.name}</h2>
            <h3>Pet Type: {pet.type}</h3>
            <h3>Description: {pet.description}</h3>
            <h3>Skills: </h3> 
            { 
            skills.map((skill, index) => <p key={index}>{skill}</p>)
            }

            <div>
                <button onClick={() => { deletePet(pet._id) }}>Adopt Me!</button>
            </div>
            <div>
                <button disabled={clicked} onClick={() => { likeHandler(pet._id)}}>Like Me!</button>
                <h3>Likes: {likes}</h3>
            </div>
        </div>
    );
}

export default Detail;
