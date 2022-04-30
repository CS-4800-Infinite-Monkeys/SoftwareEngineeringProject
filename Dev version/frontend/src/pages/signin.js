import {useState} from "react"
import "../index.css"

const Signin = () => {
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

    return (<>
        <div>
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit}>
                <label className="formLabel">Email Address:</label> 
                    <input type="text" className="textInput" name="useremail" onChange={handleChange} value={inputs.useremail || ""}></input>
                <br/>
                <br/>
                <label className="formLabel">Password:</label>    
                    <input type="password" className="textInput" name="userpassword" onChange={handleChange} value={inputs.userpassword || ""}></input>
                <br/>
                <br/>
                <input type="submit" className="buttonClass" value="Submit"></input>
            </form>
        </div>
        </>)
}
export default Signin