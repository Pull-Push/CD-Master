import React, {useState}from "react";
const Form = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confPass, setconfPassword] = useState("");

    return(
        <div>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e)=>setfirstName(e.target.value) }></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e)=>setlastName(e.target.value) }></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ (e)=>setemail(e.target.value) }></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e)=>setpassword(e.target.value) }></input>
            </div>
            <div>    
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e)=>setconfPassword(e.target.value) }></input>
            </div>

            <h2>Your Form Data</h2>    
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confPass}</p>
        </div>
    );
}
export default Form;