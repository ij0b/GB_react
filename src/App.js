import { useState, useEffect } from 'react';
import './App.css';
import { Chat } from './components/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';
import { AUTHORS } from './utils/constants';

const messageRobot = { author: AUTHORS.bot, text: 'Текст робота 123456789 123456789 123456789 123456789 123456789 123456789' };
//+++3.1 Второй способ задания уникальных key для дальнейшего рендера сообщений через map
// const messageRobot = { author: AUTHORS.bot, text: 'Текст робота 123456789 123456789 123456789 123456789 123456789 123456789', id: Date.now() };
const chatList = [
  { name: 'Чат номер 1', id: 'chat1' },
  { name: 'Чат номер 2', id: 'chat2' },
]

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (
      messageList.length
      && messageList[messageList.length - 1].author === AUTHORS.user
    ) {
      const botMessageTimeout = setTimeout(() => {
        setMessageList([...messageList, messageRobot]);
      }, 1000);
      return () => clearTimeout(botMessageTimeout);
    }
  }, [messageList]);

  return (
    <div className="App">
      <ChatList chatList={chatList} />
      <div className='Chat'>
        {messageList.map((e, index) => (
          //+++3.1 Второй способ задания уникальных key для дальнейшего рендера сообщений через map
          //<div key={e.id} className='Chat-message'>
          <div key={index} className='Chat-message'>
            <div className='Chat-message-author'>
              {e.author}
            </div>
            <div>
              {e.text}
            </div>
          </div>
        ))}
      </div>
      <Chat messageList={messageList} setMessageList={setMessageList} />
    </div>
  );
}

export default App;