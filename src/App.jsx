import Form from './components/Form';
import { useEffect } from 'react';
export default function() {

    useEffect(() => {
        const intervalId = setInterval(() => {
            const body = document.body;
            if (body.classList.contains('light-mode')) {
                body.classList.replace('light-mode', 'dark-mode');
            } else {
                body.classList.replace('dark-mode', 'light-mode');
            }
        }, 5000);

        
        document.body.classList.add('dark-mode');

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <Form/>
        </>
    )
}