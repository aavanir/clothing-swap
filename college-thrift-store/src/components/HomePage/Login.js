import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //potentially change email to username later
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        //implement login logic (need to call backend which will be done later)
        console.log('Logging in with:', email, password);
        navigate('/product/:id');
    };

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;