import React from 'react';
import ContactBubble from './ContactBubble';
import '../../styles/ContactList.css';

interface Contact {
    id: number;
    name: string;
    status: string;
    avatarUrl?: string;
}

const ContactList: React.FC = () => {
    const contacts: Contact[] = [
        { id: 1, name: 'John Doe', status: 'Online' },
        { id: 2, name: 'Jane Smith', status: 'Offline' },
        { id: 3, name: 'Bob Johnson', status: 'Online' },
        // Add more contacts here
    ];

    return (
        <div className="contact-list">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          <ContactBubble name={contact.name} avatarUrl={contact.avatarUrl} />
        </div>
      ))}
    </div>
    );
};

export default ContactList;
