import { Nav, Navbar, Container } from "react-bootstrap";
import auth from "../../utils/auth";

function HeaderNav() {
  const isLoggedIn = auth.loggedIn();

  return (
    <>
      <Navbar expand="lg" className="header-nav" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="text-color">
            Character Quiver
          </Navbar.Brand>
          <Nav>
            {isLoggedIn ? (
              <Nav.Link href="/dashboard" className="text-color">
                Dashboard
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="text-color">
                Dashboard
              </Nav.Link>
            )}
            {isLoggedIn ? (
              <Nav.Link href="/create" className="text-color">
                Create a Character
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="text-color">
                Create a Character
              </Nav.Link>
            )
            }
            {isLoggedIn ? (
              <Nav.Link
                className="text-color"
                href="/logout"
                onClick={() => auth.logout()}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="text-color">
                Login / Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
