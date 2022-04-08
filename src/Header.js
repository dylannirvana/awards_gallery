import { Container } from "react-bootstrap";

// This file contains the logo of the current Award Show. Please provide file or URL here:
import image from "./logo800.webp";
// import image from "./output.webp";


function Header() {
    return (
        <Container className="logoContainer">
           <img src={image} alt="logo"></img>
        </Container>
    )
}

export default Header;