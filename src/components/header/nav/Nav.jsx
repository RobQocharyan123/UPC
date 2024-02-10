    import './Nav.css';
    import logo from "../../../assets/header/logo.png"
    import logoMobile from "../../../assets/header/logoMobile.png"
    import { FaFacebook } from "react-icons/fa";
    import { FaInstagram } from "react-icons/fa";
    import { FaLinkedin } from "react-icons/fa";

    import { useState, useEffect, useRef } from 'react';

    export default function Nav() {
    const [scrollPosition, setScrollPosition] = useState(0);

    function openMenu(){
        setMenuOpen(!menuOpen)
        if(openSocial){
            setOpenSocial(false)
        } 
    }  


    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    const [menuOpen, setMenuOpen] = useState(false)
    const [openSocial, setOpenSocial] = useState(false)
    const navRef = useRef(null);

    useEffect(() => {
        const handleDocumentClick = (event) => {
          // Check if the click is outside the navbar
          if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
          }
    
          // Check if the click is outside the social block
          if (!event.target.classList.contains('navbar-mobile-social') && openSocial) {
            setOpenSocial(false);
          }
        };
    
        // Add event listener when the component mounts
        document.addEventListener('click', handleDocumentClick);
    
        // Remove event listener when the component unmounts
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, [menuOpen, openSocial]);

    return (
        <nav className='navbar'  ref={navRef}>
            <div className={`navbar-block ${scrollPosition > 5 ? "position-fixed" : ""}`}>
                <div className='nav'>
                    <div className='navbar-logo'>
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className='navbar-info'>
                        <div className={`nabar-info-top ${scrollPosition > 5 ? "nav-top-none" : ""}`}>
                            <ul>
                                <li><span>24/7 Աջակցում: </span><a href="tel">1-800-700-6200</a></li>
                                <li><span>E-mail: </span><a href="tel">mail@demolink.org</a></li>
                            </ul>
                            <div className='nav-social'>
                                    <a href="https://www.facebook.com/profile.php?id=61555750056577" target={'_blank'}><FaFacebook /></a>
                                    <a href="https://www.instagram.com/universal_programming_company/" target={'_blank'}><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/in/universalprogramming-company-392b002ab" target={'_blank'}><FaLinkedin /></a>
                            </div>                   
                        </div>
                        <div className='navbar-info-bottom'> 
                            <ul>
                                <li className='navbar-info-bottom-item-first'><a href="#">Մեր մասին</a></li>
                                <li><a href="#services">Մեր ծառայություները</a></li>
                                <li><a href="#pricing">Գնայինն պլաններ</a></li>
                                <li><a href="#choose">Ինչու ընրրել մեզ</a></li>
                                <li className='navbar-info-bottom-item-last'><a href="#contact">Կապ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-nav'>
                <div className='mobile-nav-block'>
                    <div className='mobile-nav-left-side'>
                        <div>
                            <button className={`open-btn-mobile ${menuOpen ? "activ" : ""}`} onClick={openMenu}><span></span></button>
                            <ul className={`mobile-nav-list ${menuOpen ? "open" : "close"}`}> 
                                <li><a href="#">Մեր մասին</a></li>
                                <li><a href='#services'>Մեր ծառայություները</a></li>
                                <li><a href='#pricing'>Գնայինն պլաններ</a></li>
                                <li><a href='#choose'>Ինչու ընրրել մեզ</a></li>
                                <li><a href='#contact'>Կապ</a></li>
                            </ul>
                        </div>
                        <a href="" className='mobile-logo-block'>
                            <img src={logoMobile} alt="" />
                        </a>
                    </div>
                    <div className='mobile-nav-right-side'>
                    <div className='navbar-mobile-social' onClick={() => {
                            setOpenSocial(!openSocial)
                            if(menuOpen){
                                setMenuOpen(false)
                            }
                    }}>
                            <span></span>
                    </div>
                    <div className={`mobile-nav-right-side-hide-block ${openSocial ? "open-social" : "close-social"}`}>
                    <    div className="mobile-nav-right-side-block">
                                <ul>
                                    <li><span>24/7 Աջակցում: </span><a href="tel">1-800-700-6200</a></li>
                                    <li className='m-top'><span>E-mail: </span><a href="tel">mail@demolink.org</a></li>
                                </ul>
                                <div className='nav-social m-top'>
                                    <a href=""><FaFacebook /></a>
                                    <a href=""><FaInstagram /></a>
                                    <a href=""><FaLinkedin /></a>
                                </div>                   
                            </div>
                    </div>
                    </div>
                </div>  
            </div>
        </nav>
    );
    }
