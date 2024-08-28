import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import './style.css'; // Adjusted to include the CSS file

function LogAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null); 

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({ name: username, isAdmin });
    };

    return (
        <div className="container">
            <div className="login-form">
                {user ? (
                    <AdminPanel user={user} />
                ) : (
                    <div>
                        <h1>Login</h1>

                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Account Type:</label>
                            <select
                                value={accountType}
                                onChange={(e) => setAccountType(e.target.value)}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <button onClick={handleLogin}>Login</button> 
                        <button className="sign-up-button">Sign Up</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LogAdmin;
