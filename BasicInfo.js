import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

export default function BasicInfo() {
    const [sum, setName] = useState("");
    const [srok, setEmail] = useState("");
    const [inputValue, setInputValue] = useState('');
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
    const navigate = useNavigate();

    // Function to handle form submission
    const submit = (e) => {
        e.preventDefault();
        if (!sum || !srok || !inputValue) {
            // Alert if any field is missing
            alert("All fields necessary!");
        } else {
            navigate('/test');
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value === 'Да') {
            setShowAdditionalInputs(true);
        } else {
            setShowAdditionalInputs(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="card">
                        <div className="card-body">
                            <Form onSubmit={submit}>
                                <h4 className="mb-4">Условия кредита</h4>
                                <Form.Group className="mb-3">
                                    <Form.Label>Сумма требуемого кредита (₽)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={sum}
                                        onChange={(e) => { setName(e.target.value) }}
                                        placeholder="Ввдение сколько хотите взять рублей в кредит"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Срок кредита (месяц)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={srok}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Введите на сколько месяцев хотите взять кредит"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Есть ли действующие кредиты?</Form.Label>
                                    <Form.Select
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    >
                                        <option></option>
                                        <option>Да</option>
                                        <option>Нет</option>
                                    </Form.Select>
                                    {showAdditionalInputs && (
                                        <div className="mt-3">
                                            <Form.Label>Укажите сумму действующего кредита (₽)</Form.Label>
                                            <Form.Control type="number" placeholder="" />
                                            <Form.Label>Укажите платеж по данному кредиту (₽)</Form.Label>
                                            <Form.Control type="number" placeholder="" />
                                        </div>
                                    )}
                                </Form.Group>
                                <Button type="submit" variant="outline-primary" className="me-3">Продолжить</Button>
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
