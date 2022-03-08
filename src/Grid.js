import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Grid() {
  return (
    <Container>
  <Row>   
    <Col> <Link to="/planets"><img src="http://fpoimg.com/150x150" /></Link> </Col>
    <Col> <Link to="/moons"><img src="http://fpoimg.com/150x150" /></Link> </Col>
  </Row>
  <Row>
    <Col> <Link to="/asteroids"><img src="http://fpoimg.com/150x150" /></Link> </Col>
    <Col> <Link to="/planetids"><img src="http://fpoimg.com/150x150" /></Link> </Col>
  </Row>
</Container>
  )
}

export default Grid;