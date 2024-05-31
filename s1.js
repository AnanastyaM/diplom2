import { Container, Row, Col, Card } from 'react-bootstrap';

function Sol1() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <Card.Title as="h3">ВТБ</Card.Title>
                            <Card.Link href="https://www.vtb.ru/personal/kredit/nalichnymi/?ysclid=lvrpbbvogt186899428">
                                <img height="150" src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-znachok-vtb-na-prozrachnom-fone-21.jpg" alt="ВТБ" />
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <Card.Title as="h3">СБЕР</Card.Title>
                            <Card.Link href="https://www.sberbank.com/ru/person/credits/money/consumer_unsecured?utm_source=yandex&utm_medium=cpc&utm_campaign=credits.money.consumer.unsecured_person_perform_god_20220100013_rk434103gr2214_context_search_brand_rus_yxprptr|90751819&utm_content=actions|cid|90751819|gid|5241883758|ad|14916620409_14916620409|ph_id|47568052929|src|none_search|geo|%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA_65|&utm_term=---autotargeting&yclid=3679513617315921919">
                                <img height="150" src="https://tvsamara.ru/i/11/111a88b33611e2f38d9d7f0488afc592.jpg" alt="СБЕР" />
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <Card.Title as="h3">СовкомБанк</Card.Title>
                            <Card.Link href="https://sovcombank.ru/apply/credit/vygodnaya-stavka/?utm_campaign=109212817_yandex_credit_brand_search_broad_rf_yxprptr&utm_medium=PKW&utm_source=E-com&utm_content=src:search|srcn:none|gid:5428658294|aid:16019635256|ph:51078875554|dvc:desktop|loc:%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA|reg:65|coef:11421024|dvc:desktop|mtp:|mtph:|ps:1|pst:premium|intr:|rtid:51078875554&utm_term=---autotargeting&yclid=12222249684649902079">
                                <img height="150" src="https://answr.pro/uploads/content/ye/nz/YEnZquj-Fukc0i-uWxRRXlWBlYSRSKFM.jpg" alt="СовкомБанк" />
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Sol1;
