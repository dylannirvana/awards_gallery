import { Container } from "react-bootstrap";
import image from "./logo_480.avif";

function Header() {
    return (
        <Container className="logoContainer">
           <img src={image} alt="logo"></img>
        </Container>
    )
}

export default Header;