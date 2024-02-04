import React, { useState } from "react";
import "./Services.css";
import {
  BsDatabaseFill,
  BsWindowDesktop,
  BsBug,
  BsPalette,
} from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import SeviceCard from "./SeviceCard";
// import [photos] from '../../assets/services'

import background from "../../assets/services/12.jpg";

export const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: BsWindowDesktop,
      header: "Create Your Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos ipsam,",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
      // photo: URL(background)
    },
    {
      id: 2,
      icon: BsDatabaseFill,
      header: "Database Management",
      description:
        "UPC provides top-notch database management solutions for small and medium businesses worldwide.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    {
      id: 3,
      icon: BsPalette,
      header: "UX & UI Design",
      description:
        "Our team of UX designers creates easy-to-understand interfaces for all kinds of applications.",
      content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    {
      id: 4,
      icon: BsWindowDesktop,
      header: "IT Consulting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos ipsam,",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    {
      id: 5,
      icon: BsBug,
      header: "QA & Testing",
      description:
        "We pay a lot of attention to QA and Testing procedures to ensure the best quality of our software.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    {
      id: 6,
      icon: CiLock,
      header: "Security",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
  ];

  const [CardInfo, setCardInfo] = useState(null);

  function handelclick(data, d) {
    if (CardInfo === null) {
      const newCard = data.find((item) => item.id === d.id);
      if (newCard) {
        setCardInfo([newCard]);
      }
    }
  }

  return (
    <div
      className="services"
      id="services"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="cervises_h">
        <h1>Our Services</h1>
      </div>
      <div className="contents">
        {servicesData.map((data) => (
          <div className="services-first" key={data.id}>
            <h3>
              <data.icon color="#00C9B2FF" size={42} />
            </h3>
            <h2>{data.header}</h2>
            <p>{data.description}</p>
            <div className="service_details">
              <span onClick={() => handelclick(servicesData, data)}>
                View details
              </span>
            </div>
          </div>
        ))}
      {/* {CardInfo && <SeviceCard data={CardInfo} setCardInfo={setCardInfo} />} */}

      </div>
    </div>
  );
};
