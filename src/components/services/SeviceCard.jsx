import React from 'react';

export default function ServiceCard({ data, setCardInfo, activeClass, setActiveClass }) {
    const el = data[0];
    const handleClose = () => {
        setCardInfo(null);
        setActiveClass("")
        console.log("heds")
    };

    console.log(data)
    console.log(activeClass);

    return (
      <div className='card-more-info-block'> 
            <div className={`cardClass ${activeClass ? "open" : ""}`}>
                <el.icon color='#03616dae' size={48}/>
                <ul><h4>{el.title}</h4>
                    {
                        el.content.map(elem =>{
                            return <li className='card_li'>{elem}</li>
                        })
                    }
                </ul>
                <span onClick={handleClose}>X</span>
            </div>
      </div>
    );
}


