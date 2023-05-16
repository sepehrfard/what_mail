export default function ChatDisplay({ messages }) {
    return (
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.role}:</strong> {message.content}
          </div>
        ))}
      </div>
    );
  }
