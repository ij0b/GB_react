import React from 'react'

export const Chat = ({ messageList, setMessageList }) => {
    let currentMessageList;
    const handleChange = (e) => {
        currentMessageList = [...messageList, { author: 'user', text: e.target.value }];
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentMessageList !== undefined) {
            setMessageList(currentMessageList);
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