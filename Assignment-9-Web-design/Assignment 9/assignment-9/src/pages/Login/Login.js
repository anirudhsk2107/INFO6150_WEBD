import React from "react";
import { renderMatches, useNavigate, } from 'react-router-dom'
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    let [emailError, setemailError] = useState("");
    let [passwordError, setpasswordError] = useState("");
    let [MessageError, setMessageError] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!validate()) {
                login();
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    let validate = () => {

        let emailregex = /^([a-z\d\.]+@northeastern.edu)$/;
        let passwordregex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
        if (email === "" && password === "") {
            setemailError("Please enter Email");
            setpasswordError("Please enter password");
            return true;
        }
        else{
            setemailError(" ");
            setpasswordError(" ");
        }
 
        if (email === "") {
            setemailError("Please enter email");
            return true;
        }
        else {
            setemailError(" ")
            if (!emailregex.test(email)) {
                setemailError("Please enter valid email with @northeastern.edu");
                return true;

            }
            else{
                setemailError(" ")
            }

        }
        if (password === "") {
            setpasswordError("Please enter password");
            console.log(passwordError)
            return true;
        }
        else {
            setpasswordError(" ")
            if (!passwordregex.test(password)) {
                setpasswordError("Please enter a valid password");
                return true;
            }
            else{
                setemailError(" ");
                setpasswordError(" ");  
            }
        }
    }


    let login = () => {
        let item = { email: email, password: password }
        let result = fetch('http://localhost:8080/Logintest', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        }).then(res => {
            result = res.json()
            if (res.statusText === "OK") {
                navigate('/Home');
            }
            else if (res.status == 401) {
                setpasswordError("Invalid credentials");
                setMessageError(" ")
            }
            else {
                if(!validate())
                {
                    setMessageError("User Does not exist. Please check the credentials.")
                    return false;
                }
                else
                {
                   if(validate()){
                    setMessageError(" ")
                    return true;
                   }
                }
            }
        })
    }

    return (

    <div id="form">
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1> Login Page</h1>
                <br></br>
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div style={{ fontSize: 12, color: "red" }}>{emailError ? <p>{emailError}</p> : null}</div>
                <br></br>
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <div style={{ fontSize: 12, color: "red" }}>{passwordError ? <p>{passwordError}</p> : null}</div>
                <br></br>
                <button type="submit">Submit</button>
                <div style={{ fontSize: 12, color: "red" }}>{MessageError ? <p>{MessageError}</p> : null}</div>
                <br></br>
            </form>
        </div>
    </div>
    )
}

export default Login