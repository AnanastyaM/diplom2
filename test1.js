import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

const InputPage1 = () => {
    const [ob, setFullName] = useState('');
    const [inn, setDob] = useState('');
    const [ist, setNationality] = useState('');
    const [sred, setMaritalStatus] = useState('');
    const [pod, setRegion] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value === 'Да') {
            setShowAdditionalInputs(true);
        } else {
            setShowAdditionalInputs(false);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if (!pod || !ob || !inn || !ist || !sred || !inputValue) {
            alert("All fields are necessary!");
        } else {
            navigate('/footer');
        }
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="card">
                        <div className="card-body">
                            <Form onSubmit={submit}>
                                <h4 className="mb-4">Данные о работодателе</h4>
                                <Form.Group className="mb-3">
                                    <Form.Label>Образование</Form.Label>
                                    <Form.Select
                                        value={ob}
                                        onChange={(e) => setFullName(e.target.value)}
                                    >
                                        <option value="">Выберите</option>
                                        <option value="Высшее">Высшее</option>
                                        <option value="Среднеспециальное">Среднеспециальное</option>
                                        <option value="Среднее">Среднее</option>
                                        <option value="Несколько высших">Несколько высших</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>ИНН/Название организации</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={inn}
                                        onChange={(e) => setDob(e.target.value)}
                                        placeholder="Введите ИНН или название организации"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Источник дохода</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={ist}
                                        onChange={(e) => setNationality(e.target.value)}
                                        placeholder="Введите Ваш источник дохода"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Среднемесячный доход (₽)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={sred}
                                        onChange={(e) => setMaritalStatus(e.target.value)}
                                        placeholder="Введите Ваш среднемесячный доход в рублях"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Сможете подтвердить доход?</Form.Label>
                                    <Form.Select
                                        value={pod}
                                        onChange={(e) => setRegion(e.target.value)}
                                    >
                                        <option value="">Выберите</option>
                                        <option value="Да">Да</option>
                                        <option value="Нет">Нет</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Вы пенсионер?</Form.Label>
                                    <Form.Select
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Выберите</option>
                                        <option value="Да">Да</option>
                                        <option value="Нет">Нет</option>
                                    </Form.Select>
                                </Form.Group>
                                {showAdditionalInputs && (
                                    <Form.Group className="mb-3">
                                        <Form.Label>Стаж с последнего места работы (месяцы)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Введите стаж с последнего места работы в месяцах"
                                        />
                                    </Form.Group>
                                )}
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
};

export default InputPage1;
