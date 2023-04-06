import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChurchIcon from '@mui/icons-material/Church';

function Footer(){
    return(
        <>
            <footer id="footer" className="footer">
                <Container>
                    <Row>
                        <Col className="footerCenter">
                            <a href="https://www.instagram.com/gki.cikarang/" className="footerIcon"><InstagramIcon fontSize="large" /></a>
                            <a href="https://www.youtube.com/@gkicikarang9568" className="footerIcon"><YouTubeIcon fontSize="large"/></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg={8}>
                            <Row>
                                <h5>Pendeta Jemaat</h5>
                            </Row>
                            <Row className="rowPendeta">
                                <ol>
                                    <Col xs={12} sm={6} md={6} lg={6} className="listPdt">
                                        <li>
                                            Pdt. Em. Suryadi<br/>
                                            <PhoneIcon />+62 816 812 919<br/>
                                            <PhoneIcon />+62 813 1851 1962<br/>
                                            <EmailIcon />suryadipdt@gmail.com
                                        </li>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6} className="listPdt">
                                        <li>
                                            Pdt. Em. Omo Hasim<br/>
                                            <PhoneIcon />+62 811 2424 962<br/>
                                            <EmailIcon />omobudi@yahoo.co.id
                                        </li>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6} className="listPdt">
                                        <li>
                                            Pdt. Febrita Melati<br/>
                                            <PhoneIcon />+62 852 8296 3272<br/>
                                            <EmailIcon />febmel12@gmail.com
                                        </li>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6} className="listPdt">
                                        <li>
                                            Pdt. Daud Chevi Naibaho<br/>
                                            <PhoneIcon />+62 813 8073 5250<br/>
                                            <EmailIcon />daud.naibaho@stftjakarta.ac.id
                                        </li>
                                    </Col>
                                </ol>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <h5>Sekretariat</h5>
                            <p>
                                <PhoneIcon />(021) 899 001 65<br/>
                                <EmailIcon />info@gkicikarang.org<br/>
                                <ChurchIcon />Ruko Roxy A12-16, Lippo Cikarang, Bekasi, 17550
                            </p>
                        </Col>
                        <Col>
                            <div id="maps" />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer