import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { ErrorMessage } from "../../utils/ErrorMessageStyled";

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
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
                localStorage.setItem("token", data.token) 
                
            }
        })
        onLogin(email)
        navigate('/')
    }


    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <div>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <form onSubmit={handleLogin} >
                <input placeholder="Email" type={"email"} onChange={handleEmailChange}/>
                <input placeholder="Password" type={"password"} onChange={handlePasswordChange}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;