import { useState } from 'react';
import { createChatCompletion } from '../api/openai';

export default function ChatInput({ addMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    addMessage({ role: 'user', content: input });
    setInput('');

    const response = await createChatCompletion(input);
    addMessage({ role: 'ai', content: response });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}
