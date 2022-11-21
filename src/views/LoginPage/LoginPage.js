import { useState } from "react";
import { BASE_URL } from "../../utils/constants";


export const LoginPage = () => {

    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'test123@gmail.com',
                // password: 'test123'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.err) {
                setError(data.err);
            } else {
                localStorage.setItem("token", data.token);
            }
        })
    }

    return (
        <div>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleLogin} >
                <input placeholder="Email" type={"email"} />
                <input placeholder="Password" type={"password"} />
                <button>Login</button>
            </form>
        </div>
    )
}