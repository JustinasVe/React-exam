import { Placeholder } from "phosphor-react";
import { Link } from "react-router-dom";
import { NavWrapper } from "../../components/Navigation/NavigationStyled";
import { useEffect, useState } from "react"
import { BASE_URL } from "../../utils/constants"
import { ErrorMessage } from "../../utils/ErrorMessageStyled";


const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    useEffect(() => {
        fetch(`${BASE_URL}/content/skills`,{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.err) {
                setError(data.err);
            } else {
                setPosts(data);
            }
        })

    },[] )
    
    return (
        <> 
            <NavWrapper>
                <Placeholder/>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/add">Add</Link>
            </NavWrapper>

            <h2>Skills:</h2>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {posts.map((post) => 
                <div>
                   <h3>{post.title}</h3> 
                   <p>{post.description}</p>
                </div>
            )}
        </>
    )
};

export default HomePage;