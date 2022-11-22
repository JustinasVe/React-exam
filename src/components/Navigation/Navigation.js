import { Placeholder } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { NavWrapper } from './NavigationStyled';

import './navigation.css';

export const Navigation = () => {
    return (
        <NavWrapper>
            <Placeholder />
            <Link className='link' to="/login">Login</Link>
            <Link className='link' to="/register">Register</Link>
        </NavWrapper>
    )
}