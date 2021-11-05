import { useState, useEffect } from 'react';
import './App.css';
import { Chat } from './components/Chat/Chat';

const messageRobot = { author: 'robot', text: 'Текст робота 123456789 123456789 123456789 123456789 123456789 123456789' };

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author === 'user') {
        setMessageList([...messageList, messageRobot]);
      }
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