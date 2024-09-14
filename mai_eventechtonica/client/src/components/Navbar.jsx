import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/Mai_logo.png'
import './Navbar.css'


function MyNavBar(props) {

  return (
    <>
    <Navbar className='Navbar'>
      <Container>
        <Navbar.Brand href="/">
        <img
              src={Logo}
              className="Mai_Logo"
              alt="Mai Logo"
            />
        </Navbar.Brand>
        <Nav.Link >Your Link</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mai</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;