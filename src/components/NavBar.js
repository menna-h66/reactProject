import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedinIn } from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { Link } from '@mui/material';
import {
  BrowserRouter as Router
} from "react-router-dom";

import { useState, useEffect } from "react";

function NavScrollExample() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" id="navbar" className={scrolled ? "scrolled" : ""} data-bs-theme="dark"  >
      <Container fluid>
        <Navbar.Brand className='nav_brand' href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto  my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <Form className="navForm">
            <div>
              <Link href='#' className='nav_icon'><FaLinkedinIn /></Link>
              <Link  href='#' className='nav_icon'><FaFacebookF /></Link>
              <Link  href='#' className='nav_icon'><FaInstagram /></Link>
            </div>
            <Button className='nav_btn'>Let's Connect</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;