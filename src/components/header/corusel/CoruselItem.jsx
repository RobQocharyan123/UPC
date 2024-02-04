import "./Corusel.css"
import { useSpring, animated } from 'react-spring';

export default function Section1SliderItem ({imgUrl, titleMas1, titleMas2, content, isActive}){
     const animation = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(35px)' },
      });

      return (
        <animated.div className={`slider-item ${isActive ? "active" : ""}`}  >
            <div className="swiper-slider-item-block" style={{backgroundImage: `url(${imgUrl})`}}>
                <div className='swiper-slider-item-block-content'>
                    <animated.h1 key={titleMas1} >{titleMas1} <span>{titleMas2}</span></animated.h1>
                    <div className='swiper-slider-item-block-content-text-block'>
                        <p>{content}</p>
                    </div>
                    <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>                
            </div>
        </animated.div>
      )
}