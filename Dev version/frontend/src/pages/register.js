import {useState} from "react"
import "../index.css"

const Register = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
    }
    return <>
    <h1>Create An Account</h1>
    <form onSubmit={handleSubmit}> 
        <label className="formLabel">First name:</label>
        <input type="text" name="fName" value={inputs.fName || ""} onChange={handleChange}></input>            
         <br />  
         <br /> 
        <label className="formLabel">Last name:</label>
        <input type="text" name="lName" value={inputs.lName || ""} onChange={handleChange}></input>            
        <br />  
        <br />  
        <label className="formLabel">Email address:</label>
        <input type="text" name="email" value={inputs.email || ""} onChange={handleChange}></input>            
        <br />    
        <br />        
        <label className="formLabel">Create password:</label>
        <input type="password" name="password" value={inputs.password || ""} onChange={handleChange}></input>            
        <br />
        <br />
        <label className="formLabel">Re-enter password:</label>
        <input type="password" name="passwordCheck" value={inputs.passwordCheck || ""} onChange={handleChange}></input>
        <br />
        <br />
        <input type="submit" value="Submit" className="buttonClass"></input>        
    </form>
    </>;
};

export default Register;