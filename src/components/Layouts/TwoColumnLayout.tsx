import React from 'react';
import '../../styles/TwoColumnLayout.css';

type TwoColumnLayoutProps = {
    smallColumn: React.ReactNode;
    bigColumn: React.ReactNode;
};

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({smallColumn, bigColumn}) => {
    return (
        <div className="two-column-layout">
            <div className="smallColumn">{smallColumn}</div>
            <div className="bigColumn">{bigColumn}</div>
        </div>
    );
};

export default TwoColumnLayout;
