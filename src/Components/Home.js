import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const signup = () => {
        navigate('/signup');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3>Anthony Abhishek</h3>
                    <h3>100</h3>
                    <h3>Ant@hotmail.com</h3>
                </div>
                <div className="col-6">
                    <h5>Add photo</h5>
                    <button className="btn btn-primary" onClick={login}>Login</button>&nbsp;
                    <button className="btn btn-success" onClick={signup}>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
