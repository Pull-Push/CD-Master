import React, {useState} from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const Main = (props) => {

    const [pets,setPets] = useState([]);
    const removeFromDom = id =>{
        setPets(pets.filter(pet=>pet._id != id));
    }

    return (
        <div>
            <PetForm pets={pets} setPets={setPets} />
            <PetList pets={pets} setPets={setPets} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;