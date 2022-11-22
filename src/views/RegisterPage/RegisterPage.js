import { BASE_URL } from "../../utils/constants";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        fetch(`${BASE_URL}/auth/register`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.err) {
                setError(data.err);
            } else {
                navigate('/login')
            }
        })
    }

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <div>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleRegister}>
                <input placeholder="Email" type={"email"}  onChange={handleEmailChange} />
                <input placeholder="Password" type={"password"} onChange={handlePasswordChange} />
                <button>Register</button>
            </form>
        </div>
    )
};

export default RegisterPage;