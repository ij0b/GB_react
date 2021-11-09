import React, { useRef, useEffect, useState } from 'react'
import { AUTHORS } from '../../utils/constants';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

export const Chat = ({ messageList, setMessageList }) => {
    const ref = useRef();
    const [currentMessage, setCurrentMessage] = useState();
    const handleChange = (e) => {
        setCurrentMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentMessage !== '') {
            setMessageList([...messageList, { author: AUTHORS.user, text: currentMessage }]);
            //+++3.1 Второй способ задания уникальных key для дальнейшего рендера сообщений через map
            //setMessageList([...messageList, { author: AUTHORS.user, text: currentMessage, id: Date.now() }]);
        }
        ref.current?.focus();
        setCurrentMessage('');
        e.target.reset();
    }

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        < form className="Chat-fields" onSubmit={handleSubmit} >
            <TextareaAutosize
                className='Chat-textarea'
                ref={ref}
                onChange={handleChange}
                aria-label=""
                minRows={3}
                placeholder="Chat message"
            />
            <Button variant='contained' type='submit'>Отправить</Button>
        </form >
    )
}