import React from 'react';

export default function ServiceCard({ data, setCardInfo }) {
    const el = data[0];
    const handleClose = () => {
        setCardInfo(null);
    };

    return (
        <div className="cardClass">
            <el.icon color='#03616dae' size={48}/>
            <ul><h4>{el.title}</h4>
                {console.log(el)}
                {
                    el.content.map(elem =>{
                        return <li className='card_li'>{elem}</li>
                    })
                }
            </ul>
            <span onClick={handleClose}>X</span>
        </div>
    );
}
