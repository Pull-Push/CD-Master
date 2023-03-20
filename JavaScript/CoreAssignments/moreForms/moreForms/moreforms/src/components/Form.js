import React, {useState}from "react";
const Form = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confPass, setconfPassword] = useState("");

    const nameValidation = (name) =>{
        if(name.length < 2 && name.length !== 0){
            return "Name must be at least 2 characters";
        }else{
            return "";
    }
    }
    const emailValidation = (email) =>{
        if(email.length < 5 && email.length !== 0){
            return "Email must be at least 5 characters";
        }else{
            return "";
        }
    }
    const passValidation = (password, confirmation) =>{
        if(password.length<8 && password.length !== 0){
            return "Password must be at least 8 characters";
        }else if(password !== confirmation){
            return "Password and Confirmation must match";
        }else{
            return "";
        }
        
    }

    return(
        <div>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e)=>setfirstName(e.target.value) }></input>
                <h4>{nameValidation(firstName)}</h4>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e)=>setlastName(e.target.value) }></input>
                <h4>{nameValidation(lastName)}</h4>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ (e)=>setemail(e.target.value) }></input>
                <h4>{emailValidation(email)}</h4>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e)=>setpassword(e.target.value) }></input>
                <h4>{passValidation(password,confPass)}</h4>
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