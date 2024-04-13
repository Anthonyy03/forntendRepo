import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate(null);

    const validate = (event) => {
        event.preventDefault();

        if (uname === "Anthony" && pwd === "12345"){
            alert("Authenticated Successfully");
            navigate("/list")

        
        }

        else
            alert("Invalid Credentials");
    }

    return (
        <div>
            <h3>Login</h3>
            <div>
                <form className="form-group">
                    <label className="form-label" htmlFor="uname">Username</label>
                    <input
                        className="form-control"
                        name="uname"
                        id="uname"
                        type="text"
                        placeholder="Enter username"
                        onChange={(event) => { setUname(event.target.value) }}
                    ></input>
                    <label className="form-label" htmlFor="pwd">Password</label>
                    <input
                        className="form-control"
                        name="pwd"
                        id="pwd"
                        type="password"
                        placeholder="Enter password"
                        onChange={(event) => { setPwd(event.target.value) }}
                    ></input>
                    <button type="submit" className="btn btn-primary" onClick={validate}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
