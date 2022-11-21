export const LoginPage = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('login successful')
    }

    return (
        <div>
            <form onSubmit={handleLogin} >
                <input placeholder="Email" type={"email"} />
                <input placeholder="Password" type={"password"} />
                <button>Login</button>
            </form>
        </div>
    )
}