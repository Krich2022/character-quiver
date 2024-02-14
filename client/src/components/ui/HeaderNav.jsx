import { Nav, Offcanvas, Navbar, Container } from 'react-bootstrap';
import auth from '../../utils/auth';

function HeaderNav() {
    const isLoggedIn = auth.loggedIn()

    return (
        <>
            <Navbar expand="lg" className='header-nav' fixed='top'>
                <Container>
                    <Navbar.Brand href='/' className='text-white'>Character Quiver</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='dashboard' className='text-white'>Dashboard</Nav.Link>
                        <Nav.Link href='create' className='text-white'>Create a Character</Nav.Link>
                        {isLoggedIn ? (<Nav.Link className='text-white' href="logout" onClick={()=> auth.logout()}>Logout</Nav.Link>): (<Nav.Link href='login' className='text-white'>Login / Sign Up</Nav.Link>)} 
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderNav;