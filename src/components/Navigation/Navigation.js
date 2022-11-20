import { Placeholder } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './navigation.css';

export const Navigation = () => {
    return (
        <div className='navigation'>
            <Placeholder />
            <Link className='link' to="/">Login</Link>
            <Link className='link' to="/register">Register</Link>
        </div>
    )
}