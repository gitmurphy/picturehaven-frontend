import {React, useState, useEffect} from 'react';
import axios from 'axios';
import { Container, ListGroup } from "react-bootstrap";

function GalleryPage () {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        // Allow for asynchronous API operations
        async function fetchArtists() {
            try {
                const response = await axios.get('http://localhost:8080/api/artists');
                console.log(response);
                setArtists(response.data);
            } catch(error) {
                console.error('Error fetching artists:', error);
                alert('Error fetching artists');
            }
        }

        fetchArtists();
    }, []); // Empty dependency array

    return(
        <Container>
            <h2>Gallery Page</h2>
            <ListGroup>
                {artists.map((artist, index) => (
                    <ListGroup.Item key={index}>
                        <h4>{artist.name}</h4>
                        <p><strong>Bio:</strong> {artist.bio}</p>
                        <p><strong>Nationality:</strong> {artist.nationality}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default GalleryPage;
