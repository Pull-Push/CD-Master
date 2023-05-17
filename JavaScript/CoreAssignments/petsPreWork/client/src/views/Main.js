import React, {useState} from "react";
import PetForm from "../components/petForm";
import PetList from "../components/petList";

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