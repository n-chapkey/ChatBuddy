import React from 'react';
import '../../styles/ContactBubble.css'; // Import the CSS for styling

type ContactBubbleProps = {
    name: string;
    avatarUrl?: string;
    };

const ContactBubble: React.FC<ContactBubbleProps> = ({ name, avatarUrl }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="contact-bubble">
      {avatarUrl ? <img src={avatarUrl} alt={name} /> : <span>{initial}</span>}
    </div>
  );
};

export default ContactBubble;