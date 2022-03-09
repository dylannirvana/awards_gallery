import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Blurb from './Blurb';


function Grid() {
  return (
    <Container className='gridContainer'>
  <Row>   
    <Col> 
      <div>
        <h6>New Arrivals</h6>
        <Link to="/planets"><img src="https://source.unsplash.com/PpOHJezOalU/800x599" /></Link> 
      </div>
    </Col>
    <Col> 
      <div>
        <h6>Red Carpet</h6>
        <Link to="/planets"><img src="https://source.unsplash.com/I1ASdgphUH4/800x599" /></Link> 
      </div>
    </Col>
  </Row>
  <Row>
  <Col> 
      <div>
        <h6>Aerials</h6>
        <Link to="/planets"><img src="https://source.unsplash.com/x8xJpClTvR0/800x599" /></Link> 
      </div>
    </Col>
    <Col> 
      <div>
        <h6>Subterrainian</h6>
        <Link to="/planets"><img src="https://source.unsplash.com/qGQNmBE7mYw/800x599" /></Link> 
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