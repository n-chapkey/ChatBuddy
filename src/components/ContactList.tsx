import React from 'react';

interface Contact {
    id: number;
    name: string;
    status: string;
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
            {contacts.map((contact) => (
                <div key={contact.id} className="contact">
                    <div className="contact-name">{contact.name}</div>
                    <div className={`contact-status ${contact.status.toLowerCase()}`}>
                        {contact.status}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
