import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    const [gender, setGender] = useState(""); 
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [dob,setDob] = useState("");
    const navigate = useNavigate();

    const validate = (event) => {
        event.preventDefault();
        
        navigate('/'); 
    }

    return (
        <div>
            <form className="form-group">
                <label className="form-label" htmlFor="uname">Username</label>
                <input
                    className="form-control"
                    name="uname"
                    id="uname"
                    type="text"
                    placeholder="Enter username"
                    onChange={(event) => { setUname(event.target.value) }}/>
                <label className="form-label" htmlFor="pwd">Password</label>
                <input
                    className="form-control"
                    name="pwd"
                    id="pwd"
                    type="password"
                    placeholder="Enter password"
                    onChange={(event) => { setPwd(event.target.value) }}/>
                <label className="form-label">Gender</label>
                <div>
                    <input type="radio" name="gender" value="male" onChange={() => setGender("male")} /> Male<br />
                    <input type="radio" name="gender" value="female" onChange={() => setGender("female")} /> Female<br />
                </div>
                <label className="form-label">Email</label>
                <div>
                <input
                    className="form-control"
                    name="email"
                    id="email"
                    type=""
                    placeholder="Enter Email"
                    onChange={(event) => { setEmail(event.target.value) }}/>
                </div>
                <label className="form-label">Phone Number</label>
                <input
                    className="form-control"
                    name="phone"
                    id="phone"
                    type=""
                    placeholder="Enter phone number"
                    onChange={(event) => { setPhone(event.target.value) }}/><br></br>
                <label className="form-label">Date of Birth</label>
                <input
                    className="form-control"
                    name="dob"
                    id="dob"
                    type=""
                    placeholder="Enter Date of Birth"
                    onChange={(event) => { setDob(event.target.value) }}/><br></br>

                <center>
                <button type="submit" className="btn btn-primary" onClick={validate}>Submit</button>
                </center>
            </form>
        </div>
    );
}

export default Signup;
