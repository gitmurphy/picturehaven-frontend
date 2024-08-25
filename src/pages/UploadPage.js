import { React, useState } from 'react';
import axios from 'axios';
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";

function UploadPage () {

    const [artist, setArtist] = useState({
        name: '',
        bio: '',
        nationality: '',
      });

    // Allow for asynchronous API operations
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(artist);
        try {
            await axios.post('http://localhost:8080/api/artists', artist);
            alert('Artist added successfully');
        } catch (error) {
            console.error('Error adding artist:', error);
            alert('Error adding artist');
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setArtist((prev) => ({
        ...prev,
        [name]: value,
        }));
    }

    return(
        <Container>
            <h2>Add an Artist</h2>

            <Form onSubmit={handleSubmit}>

                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <Form.Control type="text" name="name" value={artist.name} onChange={handleChange} required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                    <Form.Control type="text" name="bio" value={artist.bio} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Nationality" className="mb-3">
                    <Form.Control type="text" name="nationality" value={artist.nationality} onChange={handleChange} />
                </FloatingLabel>
                <Button type = "submit">Submit</Button>
            </Form>

        </Container>
    );
}

export default UploadPage;
