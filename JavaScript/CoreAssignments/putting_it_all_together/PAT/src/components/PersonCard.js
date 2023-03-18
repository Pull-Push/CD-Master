import React, {useState} from "react";
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [newAge, setNewAge] = useState(age);

    return(
        <div>
            <h1>{lastName},{firstName}</h1>
            <p>Age: {newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={()=> setNewAge(newAge+1)}>Update {firstName}'s Age</button>
        </div>
    );
}
export default PersonCard;