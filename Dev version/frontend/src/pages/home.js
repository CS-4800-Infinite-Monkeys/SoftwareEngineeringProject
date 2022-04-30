import {Outlet, Link} from "react-router-dom";
import "../index.css";

const Home = () => {
    return (
        <>
        <h1>Calendar App Home Page</h1>
        <div><Link to="/signin"><button className="buttonClass">Sign in</button></Link> <Link to="/register"><button className="buttonClass">Create an account</button></Link></div>
        <Outlet />
        </>    
    );
}

export default Home;