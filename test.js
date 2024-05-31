import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

export default function InputPage({ addBasicData }) {
    const [fullName, setFullName] = useState('');
    const [dh, setDob] = useState('');
    const [gr, setNationality] = useState('');
    const [sem, setMaritalStatus] = useState('');
    const [region, setRegion] = useState('');
    const [koli, setDependents] = useState('');
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if (!fullName || !dh || !gr || !sem || !region || !koli) {
            alert("All fields are necessary!");
        } else {
            addBasicData(dh, gr, sem);
            navigate('/test1');
        }
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="card">
                        <div className="card-body">
                            <Form onSubmit={submit}>
                                <h4 className="mb-4">Личные данные</h4>
                                <Form.Group className="mb-3">
                                    <Form.Label>ФИО</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Введите свое ФИО"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Дата рождения</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={dh}
                                        onChange={(e) => setDob(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Гражданство</Form.Label>
                                    <Form.Select
                                        value={gr}
                                        onChange={(e) => setNationality(e.target.value)}
                                    >
                                        <option value="">Выберите</option>
                                        <option value="РФ">РФ</option>
                                        <option value="Другое">Другое</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Семейное положение</Form.Label>
                                    <Form.Select
                                        value={sem}
                                        onChange={(e) => setMaritalStatus(e.target.value)}
                                    >
                                        <option value="">Выберите</option>
                                        <option value="Холост">Холост</option>
                                        <option value="Разведен(а)">Разведен(а)</option>
                                        <option value="Женат/Замужем">Женат/Замужем</option>
                                        <option value="Вдовец/Вдова">Вдовец/Вдова</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Регион постоянной регистрации</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        placeholder="Введите место Вашей регистрации"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Количество иждивенцев</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={koli}
                                        onChange={(e) => setDependents(e.target.value)}
                                        placeholder="Введите количество иждивенцев"
                                    />
                                </Form.Group>
                                <Button variant="outline-primary" type="submit" className="me-3">Продолжить</Button>
                            </Form>
                            <div className="mt-3 d-flex justify-content-center">
                                <Badge bg="primary" className="me-2">1</Badge>
                                <Badge bg="secondary">2</Badge>
                                <Badge bg="secondary" className="ms-2">3</Badge>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
