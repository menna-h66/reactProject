import img1 from '../assets/contact-img.svg';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GetInTouch(){
    return(
       <section className="getInTouch">
        <div className='getInTouch_img'>
            <img src={img1} />
        </div>
         <div>
            <h1>Get In Touch</h1>

            <Form className='Form'>
                <Row className="g-2">
                    <Col md>
                        <Form.Control type="text" placeholder="First Name" className='Form_Control' />
                    </Col>
                    <Col md>
                        <Form.Control type="text" placeholder="Last Name " className='Form_Control'/>
                    </Col>
                </Row>

                <Row className="g-2">
                    <Col md>
                        <Form.Control type="email" placeholder="Email Address" className='Form_Control'/>
                    </Col>
                    <Col md>
                        <Form.Control type="text" placeholder="Phone No." className='Form_Control'/>
                    </Col>
                </Row>
                <Form.Control  as="textarea" rows={3} placeholder='Message' className='Form_Control textarea '/>
                <Button variant="light">Send</Button>{' '}
            </Form>
         </div>
       </section>
    )
}
export default GetInTouch;