import { useState, useEffect } from 'react';
import './App.css';
import { Chat } from './components/Chat/Chat';
import { AUTHORS } from './utils/constants';

const messageRobot = { author: AUTHORS.bot, text: 'Текст робота 123456789 123456789 123456789 123456789 123456789 123456789' };

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
      <header className="App-header">
        <div className='Chat'>
          {messageList.map((e, index) => (
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
      </header>
    </div>
  );
}

export default App;