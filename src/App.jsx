import Form from './components/Form';
import { useEffect } from 'react';
export default function() {

    useEffect(() => {
        const intervalId = setInterval(() => {
            document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? '#383737' : 'white';
            const textColor = document.body.style.backgroundColor === 'white' ? 'black' : 'white';
            document.body.style.color = textColor;
            const labels = document.querySelectorAll('label, h1, h3, p, li');
            labels.forEach(label => label.style.color = textColor);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <Form/>
        </>
    )
}