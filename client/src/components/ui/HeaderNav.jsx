import { Nav, Offcanvas, Navbar, Container } from 'react-bootstrap';

function HeaderNav() {
    return (
        <>
            <Navbar expand="lg" className='header-nav' fixed='top'>
                <Container>
                    <Navbar.Brand href='/' className='text-white'>Character Quiver</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='dashboard' className='text-white'>Dashboard</Nav.Link>
                        <Nav.Link href='create' className='text-white'>Create a Character</Nav.Link>
                        <Nav.Link href='login' className='text-white'>Login</Nav.Link>
                        <Nav.Link href='signup' className='text-white'>Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderNav;