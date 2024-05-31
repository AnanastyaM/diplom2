import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Timer(props)  {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        const timer = setTimeout(() => {

            function getAge(dateString)
            {
                const today = new Date();
                const birthDate = new Date(dateString);
                let age = today.getFullYear() - birthDate.getFullYear();
                const m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
                {
                    age--;
                }
                return age;
            }
            let w=0
            let y=0
            y=getAge(props.data.rod)
            if(y<=20){
                w+=10
            } else if (y<=30){
                w+=16} else if(y<=45){
                w+=22
            } else {w+=28}


            if(props.data.gra === 'РФ'){
                w+=100
            }
            if(props.data.sem === 'Холост'){
                w+=18
            }
            if(props.data.gra === 'Разведен(а)'){
                w+=21
            }
            if(props.data.gra === 'Женат/Замужем'){
                w+=26
            }
            if(props.data.gra === 'Вдовец/Вдова'){
                w+=23
            }
            if (timeLeft > 0) {
                setTimeLeft((prevTime) => prevTime - 1);
            }
            else{
                if(w>=100){
                    navigate('/s1'); } else {navigate('/s2')}
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate, props.data.gra, props.data.rod, props.data.sem, timeLeft]);

    return (
        <div className='text-center qform'>
            <h3>Для решения нужно подождать : {timeLeft} секунд</h3>

            {timeLeft === 0 && <p>Все готово!</p>}
        </div>
    );
};

