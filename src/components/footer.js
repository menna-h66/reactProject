import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaLinkedinIn } from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { Link } from '@mui/material';

function Footer(){
    return(
       <footer>
           <div className="container">
            <h1>See My Projects At Once & Leave Here Your E-mail Address</h1>

            <Form.Group className="mb-3 Form_Group" controlId="exampleForm.ControlInput1">
                 <Button variant="Submit">Submit</Button>{' '}
                <Form.Control className='form_control' type="email" placeholder="Email Address" />
            </Form.Group>
           </div>

           <div className='copyRights'>
               <h1>LOGO</h1>

               <Form className='form'>
                    <div className='   mb-4 '>
                        <Link href='#' className='nav_icon'><FaLinkedinIn /></Link>
                        <Link  href='#' className='nav_icon'><FaFacebookF /></Link>
                        <Link  href='#' className='nav_icon'><FaInstagram /></Link>
                    </div>
                    <p>--CopyRights 2016-- All Rights Reserved Here by Menna Allah Hany Fathy</p>
                </Form>
           </div>
       </footer>
    )
}
export default Footer;