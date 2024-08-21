import React, {useState} from 'react';

import './App.css';

function Registration(){
    const[username, setUsername] = useState ('');
    const[email, setEmail] = useState ('');
    const[password, setPassword] = useState ('');
    const[submitted, setSubmitted] = useState (false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Submitted:",{username, email, password})
        setSubmitted (true);
    };


    return(
        <div className="Registration">
            <header className="App-header">
                <h1> Registration Form</h1>
                <form  onSubmit={handleSubmit} className="registration-form">
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input className="form-control" type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <input className="form-control" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input className="form-control" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <button className="btn btn-outline-success" type="submit">Register</button>

                </form>
                {submitted && (<p className="success-message">Registration successful!</p>)}
            </header>
        </div>
    );
}

export default Registration;