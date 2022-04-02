import React from "react"
import "../index.css"

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event){
        alert("You submitted " + this.state.username + " and " + this.state.password)
        event.preventDefault();
    }

    render(){
        return (<>
            <body>
                <form>
                    <label>Email Address: 
                        <input type="text" value={this.state.username} onChange={this.handleInputChange}></input>
                    </label>
                    <label>Password:
                        <input type="text" onChange={this.handleInputChange}></input>
                    </label>
                </form>
            </body>
            </>)
    }
}
const Signin = () => {
    return (<>
        <body>
            <form>
                <label>Email Address: 
                    <input type="text"></input>
                </label>
                <br/>
                <label>Password:    
                    <input type="text"></input>
                </label>
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </body>
        </>)
}
export default Signin