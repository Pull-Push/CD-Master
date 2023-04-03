import React, {useState,useEffect} from "react";
import axios from 'axios';
const Poke = () => {
    const [pokeData, setPokeData] = useState([]);
    
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response=>{setPokeData(response.data.results)})
    }, []);
    
    console.log("Test");
    console.log(pokeData.name);
    return(
            <div>
                {pokeData.map((poke) => (
                    <p>-{poke.name}-</p>

                ))}
            </div>

    );
};

export default Poke;