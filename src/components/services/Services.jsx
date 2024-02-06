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
import { Expandable } from './Expandable';

export const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: BsWindowDesktop,
      header: "Վեբ Կայքերի Պատրաստում․",
      description:
        "Համաձայնեք, որ անհնար է պատկերացնել շահավետ բիզնես առանց իր «վիրտուալ այցեքարտի»՝ վեբ կայքի։ Universal Programming Company-ն (UPC) հնարավորություն կընձեռի Ձեզ ունենալ ցանկացած տեսակի և բարդության վեբ կայքեր։ UPC-ի աշխատանքային թիմում ներգրավված պրոֆեսիոնալ մասնագետները պատրաստակամ են Ձեզ համար ստեղծել, սպասարկել և արդիականացնել ցանկացած բարդության այցեքարտային, կորպորատիվ, կատալոգային, առցանց խանութների (online shopping), անձնական, լրատվական և այլ տեսակի responsive (բջջային ադապտիվ տարբերակ) վեբ կայքեր։ Վերջինիս առկայության դեպքում անհրաժեշտությունից ելնելով կարող ենք կատարել կայքի փոփխումներ, ավելացնել ցանկացած ֆունկցիոնալ ծառայություններ, առկայության դեպքում շտկել նաև առաջացած խնդիրները և այս ամենը մատուցվում է հնարավոր սեղմ ժամկետներում՝ մատչելի գներով։ ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
      // photo: URL(background)
    },
    {
      id: 2,
      icon: BsDatabaseFill,
      header: "Եռաչափ (3D) մոդելավորում.",
      description:
        "Universal Programming Company-ը (UPC) մատուցում է բարձրորակ եռաչափ՝ 3D մոդելավորման ծառայություն։ UPC-ի աշխատանքային թիմի համապատասխան մասնագետների համակարգչային գրաֆիկական հմտությունները  հնարավորություն կնձեռեն Ձեզ ունենալ ցանակացած իրական կամ երևակայական անշարժ գույքի, ստատիկ օբյեկտի կամ որևէ երևույթի եռաչափ՝ 3D ձևաչափով մոդել Մեր մոդելավորողները մասնագիտացված Autodesk 3ds Max ունիվերսալ ծրագրի կիրառմամբ՝ մանրակրկիտ ուշադրություն դարձնելով յուրաքանչյուր դետալներին կմոդելավորվեն ցանկացած բարդության և ծավալի, իրատեսական էֆֆեկտներով ճշգրիտ 3D մոդելներ։   Իրականացվում են նաև լոգոների, այցեքարտերի, բուկլետների, կատալոգների, մենյուների յուրօրինակ դիզայնով 3D մոդելավորումներ, որոնք բացառիկ հնարավորություն են ընձեռում, որպեսզի Դուք, Ձեր ընկերությունը և կամ բիզնեսը գործունեության ոլորտում լինի ավելի ներկայանալի և աչքի ընկնող",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    {
      id: 3,
      icon: BsPalette,
      header: "Դիզայն",
      description:
        "Վեբ դիզայն-Գրաֆիկ դիզայն,- դիզայն-Լոգոների 3D դիզայն",
      content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    {
      id: 4,
      icon: BsWindowDesktop,
      header: "Մարկետինգ",
      description:
        "•	SMM առաջխաղացում •	SEO առաջխաղացում•	Կայքի աուդիտ•	Digital Marketing (Google Ads /PPC, OLV/)  •	Local SEO (Google my business)   •	Marketing strategy/tactics     •	Marketing analysis •	Social media marketing (full)        •	Content marketing        •	Content Creation        ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    {
      id: 5,
      icon: BsBug,
      header: "Սպասարկում",
      description:
        "•	Կայքերի սպասարկում        •	Հոսթինգ և դոմեն        •	Տեխնիկական աջակցություն        .",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    },
    // {
    //   id: 6,
    //   icon: CiLock,
    //   header: "Security",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quae libero. Culpa iure optio, odio soluta voluptatem quam recusandae beatae totam vitae earum, sed temporibus nesciunt, magni aut eum?",
    // },
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
      <div className="max-width services-block">
          <div className="cervises_h">
            <h1>Մեր ծառայությունները</h1>
          </div>
          <div className="contents">
            {servicesData.map((data) => (
              <div className="services-first" key={data.id}>
                <div>
                  <h3>
                    <data.icon color="#00C9B2FF" size={42} />
                  </h3>
                  
                    <h2>{data.header}</h2>
                    <Expandable info={data.description} />{}
                  
                </div>
          
                  
                  {/* <button className="service_details">
                    <span onClick={() => handelclick(servicesData, data)}>
                      Կարդալ Ավելին
                    </span>
                  </button> */}
              </div>
            ))}
          {/* {CardInfo && <SeviceCard data={CardInfo} setCardInfo={setCardInfo} />} */}

          </div>
      </div>
    </div>
  );
};


