import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React from "react";

function Home() {
    const navigate = useNavigate();

    const submit = () => {
        navigate('/basicinfo');
    }

    const submit1 = () => {
        navigate('/about');
    }

    return (
        <Container className="qform mt-5">
            <Row className="justify-content-center">
                <Col md={8}> {/* Stretching the card to occupy more space */}
                    <Card className="text-center shadow">
                        <Card.Body>
                            <Card.Title>Добро пожаловать!</Card.Title>
                            <Card.Text>
                                Мы - ваш надежный партнер в финансовых вопросах. Наша служба предоставляет качественный анализ кредитоспособности граждан. Мы учитываем все аспекты вашей финансовой истории, чтобы помочь вам принять осознанные решения.
                            </Card.Text>
                            <Card.Title>Информация о нас</Card.Title>
                            <Card.Text>Служба для анализа кредитоспособности граждан</Card.Text>
                            <Card.Title>Контактная информация</Card.Title>
                            <Card.Text>
                                Адрес: Санкт-Петербург, Харченко, дом 17, помещения Н.<br />
                                Телефон: 74232497777
                            </Card.Text>
                            <Button variant="outline-primary" className="mx-2" onClick={submit1}>
                                Посмотреть наших банк-партнеров
                            </Button>
                            <Button variant="outline-primary" className="mx-2 mt-2" onClick={submit}>
                                Подать заявку/ рассчитать кредитоспособность
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={12}>
                    <h2 className="text-center mb-4">Почему выбирают нас?</h2>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Профессионализм</Card.Title>
                            <Card.Text>Наши эксперты имеют многолетний опыт в сфере финансовых анализов.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Надежность</Card.Title>
                            <Card.Text>Мы сотрудничаем только с проверенными банками и финансовыми учреждениями.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Простота в использовании</Card.Title>
                            <Card.Text>Наш сервис предоставляет простой и интуитивно понятный интерфейс для пользователей.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
