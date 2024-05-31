import {Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="light" variant="light" expand="lg" className="mb-4">
            <Navbar.Brand href="/">
                <img
                    src="./logo.png"
                    width="50"
                    height="50"
                    className="m-1"
                    alt="Кредитный анализатор logo"
                />
                {' '}
                Кредитный анализатор
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/about">Партнеры</Nav.Link>
                    <Nav.Link href="/basicInfo">Кредитоспособность</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
