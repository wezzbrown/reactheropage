import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MainBody from './component/body'
import './App.css'
import Footer from './component/footer';
import image from '../src/assets/images__2_-removebg-preview.png'


function BasicExample() {
  return (
    <div className="main-container">
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home header1"><h1>Atomic</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/">Gallery</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/">Blog</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/">FAQs</a>
          </li>
    </ul>

</Nav>
      <form className="d-flex">
          <div className="ms-auto mt-3 mt-lg-0">
              <a href="/" className="btn btn-sm px-3 btn-success rounded-pill shadow-sm me-3">Login</a>
              <a href="/" className="btn btn-sm px-3 btn-light rounded-pill shadow-sm">Sign Up</a>
          </div>
      </form>
        </Navbar.Collapse>
      </Container>

      

    </Navbar>
    <div className='container'>
    <MainBody  />
   <a href="{https://www.youtube.com/watch?v=JRzWRZahOVU}">
    <div className='image3'>
    <img src={image} className='image' />
    </div>
    </a>
    </div>

    <div className='container  block2 bg-white p-5'>
      <Footer icon={<i class="fa-regular fa-lightbulb"></i>} heading='Intuitive Thinking' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.' />
      <Footer icon={<i class="fa-solid fa-carrot"></i>} heading='Orange for Carrots' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.' />
      <Footer icon={<i class="fa-solid fa-infinity"></i>} heading='Infinite Possibilities
'     paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.' />
    </div>
    </div>
  );
}

export default BasicExample;