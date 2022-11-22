import { Placeholder } from "phosphor-react";
import { Link } from "react-router-dom";
import { NavWrapper } from "../../components/Navigation/NavigationStyled";

const AddPage = () => {
    return (
        <NavWrapper>
            <Placeholder/>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/add">Add</Link>
        </NavWrapper>
    )
};

export default AddPage;