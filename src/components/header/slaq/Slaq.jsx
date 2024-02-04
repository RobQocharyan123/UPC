import "./Slaq.css"
import { useState, useEffect } from "react"
import { IoIosArrowUp } from "react-icons/io";

export default function Slaq (){
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
        <a href="#" className={`slaq ${scrollPosition > 150 ? "slaq-show" : "slaq-hide"}`}>
            <IoIosArrowUp />
        </a>
  
  )
}