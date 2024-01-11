import React from 'react';

interface DirectMessageProps {
    sender: string;
    message: string;
}

const DirectMessage: React.FC<DirectMessageProps> = ({ sender, message }) => {
    return (
        <div className="direct-message">
            <div className="sender">{sender}</div>
            <div className="message">{message}</div>
        </div>
    );
};

export default DirectMessage;
