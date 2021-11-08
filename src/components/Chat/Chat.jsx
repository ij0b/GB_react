import React from 'react';
import { AUTHORS } from '../../utils/constants';

export const Chat = ({ messageList, setMessageList }) => {
    let currentMessageList;
    const handleChange = (e) => {
        currentMessageList = { author: AUTHORS.user, text: e.target.value };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentMessageList !== undefined) {
            setMessageList([...messageList, currentMessageList]);
        }
        e.target.reset();
    }

    return (
        < form onSubmit={handleSubmit} >
            <input type='text' onChange={handleChange} />
            <input type='submit' />
        </form >
    )
}