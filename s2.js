import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sol2 = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='text-center qform'>
            <h3>Извините, мы не можем одобрить Вам кредит</h3>
            <h6>Вы можете закрыть это приложение</h6>
            <Button onClick={handleButtonClick} variant="primary">На главную</Button>
        </div>
    );
};

export default Sol2;
