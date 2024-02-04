import React from 'react';

export default function ServiceCard({ data, setCardInfo }) {
    const el = data[0];

    const handleClose = () => {
        setCardInfo(null);
    };

    return (
        <div className="cardClass">
            <el.icon color='#00C9B2FF' size={48}/>
            <h1>{el.header}</h1>
            <p>{el.content}</p>
            <span onClick={handleClose}>X</span>
        </div>
    );
}
