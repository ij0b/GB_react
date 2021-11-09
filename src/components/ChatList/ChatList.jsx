import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

export const ChatList = ({ chatList }) => {
    return (
        <List className='Chat-list' >
            {chatList.map((e) => (
                <ListItem key={e.id} className='Chat-list-item' >
                    <Button variant='contained' type='submit'>
                        {e.name}
                    </Button>
                </ListItem>
            ))
            }
        </List >
    )
}