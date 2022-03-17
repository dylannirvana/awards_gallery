import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Blurb from './Blurb';
import BlurbTop from './BlurbTop';


function Grid() {
  return (
    <Container className='gridContainer'>
      <BlurbTop />
  <Row>   
    <Col> 
      <div>
        <h6>Awards</h6>
        <Link to="/planets"><img src="https://cdn.bcms.app/uploads/medium_awards1_a9ea1a3a7a.jpg" /></Link> 
      </div>
    </Col>
    <Col> 
      <div>
        <h6>Performances</h6>
        <Link to="/moons"><img src="https://cdn.bcms.app/uploads/medium_performances1_e1b5f12e88.jpg" /></Link> 
      </div>
    </Col>
  </Row>
  <Row>
  <Col> 
      <div>
        <h6>Asteroids</h6>
        <Link to="/asteroids"><img src="https://source.unsplash.com/x8xJpClTvR0/800x599" /></Link> 
      </div>
    </Col>
    <Col> 
      <div>
        <h6>Planetids</h6>
        <Link to="/planetids"><img src="https://source.unsplash.com/qGQNmBE7mYw/800x599" /></Link> 
      </div>
    </Col>
  </Row>
  <Row>
    <Blurb />
  </Row>
</Container>
  )
}

export default Grid;