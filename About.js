import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="qform mt-5">
            <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <Card.Title as="h3">ВТБ</Card.Title>
                            <Card.Link href="https://www.vtb.com/?ysclid=lvpz67xj8g134795101">
                                <img height="150" src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-znachok-vtb-na-prozrachnom-fone-21.jpg" alt="ВТБ" />
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <Card.Title as="h3">СБЕР</Card.Title>
                            <Card.Link href="https://www.sberbank.com/ru/person/dist_services">
                                <img height="150" src="https://tvsamara.ru/i/11/111a88b33611e2f38d9d7f0488afc592.jpg" alt="СБЕР" />
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <Card.Title as="h3">СовкомБанк</Card.Title>
                            <Card.Link href="https://sovcombank.ru/?ysclid=lvpzc8i0l6678309979&utm_referrer=https%3A%2F%2Fyandex.ru%2F">
                                <img height="150" src="https://answr.pro/uploads/content/ye/nz/YEnZquj-Fukc0i-uWxRRXlWBlYSRSKFM.jpg" alt="СовкомБанк" />
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
