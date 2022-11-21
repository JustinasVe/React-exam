import { BASE_URL } from "../../utils/constants";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}/auth/register`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'test123@gmail.com',
                password: 'test123'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.err) {
                setError(data.err);
            } else {
                navigate("/");
            }
        })
    }

    return (
        <div>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleRegister}>
                <input placeholder="Email" type={"email"} />
                <input placeholder="Password" type={"password"}/>
                <button>Register</button>
            </form>
        </div>
    )
};