import React from "react";
import { useParams } from "react-router-dom";


const Var = () => {
    const { userInput, font, back } = useParams();
    let output = "";

    if (isNaN(userInput)) {
        output = <h2>The Word is {userInput}</h2>
    } else {
        output = <h2>The Number is {userInput}</h2>
    }
    return (
        <h2 style={{color:font, backgroundColor:back}}> {output.props.children} </h2>
    );
}

export default Var