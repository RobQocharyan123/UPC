import React, { useEffect, useReducer, useState } from "react";
import "./Header.css";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { reducer, initialState } from './../../reducer';
import { actions } from './../../actions';
import { MdClose } from "react-icons/md";



export const Header = () => {



  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(() => {
    const handleWindowResize = () => {
      dispatch({type:actions.WINDOWSIZE,payload:window.innerWidth})
    };

    window.addEventListener('resize', handleWindowResize);
    if(state.windowSize>768){
      dispatch({type:actions.BURGER,payload:true})
    }
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [state.windowSize]);
  
  const showMenuBar = ()=>{
    dispatch({type:actions.BURGER,payload:!state.burger})
  }

  const closeMenuBar =()=>[
    dispatch({type:actions.BURGER,payload:!state.burger})
  ]

  return (
    <div className="header">
      <dvi className={"navbar"}>
        {state.burger && 
        <nav>
          <MdClose className="close" onClick={closeMenuBar} />

          <ul>
            <li>
              <a href="#">About</a>{" "}
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">pages</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
        }
        <RxHamburgerMenu  className="burger" onClick={showMenuBar}/>
        

        <dvi className="logo">
          <img
            src={require("../../assets/header/logo.png")}
            alt="Logo Ups Work"
            title="UPS work group"
          />
        </dvi>
      </dvi>
      <dvi className="search">
        <GoSearch />
      </dvi>
    </div>
  );
};
