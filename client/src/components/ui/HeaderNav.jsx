import { Nav, Offcanvas, Navbar, Container } from 'react-bootstrap';

function HeaderNav() {
    return (
        <>
            <Navbar expand="lg" className='header-nav' fixed='top'>
                <Container>
                    <Navbar.Brand href='landing' className='text-white'>Character Quiver</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='dashboard'>Dashboard</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderNav;