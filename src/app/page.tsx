'use client';

import ChatInput from './components/ChatInput';
import ChatDisplay from './components/ChatDisplay';
import { useState } from 'react';

export default function Page() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <ChatDisplay messages={messages} />
      <ChatInput addMessage={addMessage} />
    </div>
  );
}
