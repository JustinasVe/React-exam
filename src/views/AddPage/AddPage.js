import { Placeholder } from "phosphor-react";
import { Link } from "react-router-dom";
import { NavWrapper } from "../../components/Navigation/NavigationStyled";
import { BASE_URL } from "../../utils/constants";
import { useState } from "react";
import { ErrorMessage } from "../../utils/ErrorMessageStyled";

const AddPage = () => {
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${BASE_URL}/content/skills`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.err) {
                setError(data.err);
            } else {
                alert('Skills successfully added!')
            }
        })
    }

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    return (
        <>
            <NavWrapper>
                <Placeholder/>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/add">Add</Link>
            </NavWrapper>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input value={title} type="text" onChange={handleTitleChange}/>
                </div>
                <div>
                    <textarea value={description} onChange={handleDescriptionChange}/>
                </div>
                <button>Add</button>
            </form>
            </>
    )
};

export default AddPage;