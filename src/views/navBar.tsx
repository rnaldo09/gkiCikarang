import { 
    Navbar,
    Container,
    Nav,
    NavDropdown 
} from "react-bootstrap"

function NavBar(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navBarCust" sticky="top">
                <Container>
                    <Navbar.Brand href="/">GKI CIKARANG</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navBarItem">
                        <Nav className="navLink">
                            <NavDropdown title="Jadwal Gereja" id="jadwal">
                                <NavDropdown.Item href="#ibadah">Jadwal Ibadah</NavDropdown.Item>
                                <NavDropdown.Item href="#activity">Kegiatan Sebulan</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Form Gereja" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#formDoa">Form Doa</NavDropdown.Item>
                                <NavDropdown.Item href="#formKatek">Form Katekisasi</NavDropdown.Item>
                                <NavDropdown.Item href="#formSIDI">Form SIDI</NavDropdown.Item>
                                <NavDropdown.Item href="#formBaptis">Form Baptis Dewasa</NavDropdown.Item>
                                <NavDropdown.Item href="#formOT">Form Persetujuan Orang Tua</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#warta">Warta Jemaat</Nav.Link>
                            <Nav.Link href="#artikel">Artikel</Nav.Link>
                            <Nav.Link href="#profile">Profil</Nav.Link>
                            <Nav.Link href="#contactUs">Hubungi Kami</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default NavBar