import React, { useState } from "react";
import "./Services.css";
import {
  BsWindowDesktop,
  BsPalette,
  BsCalculator,
  BsFillBadge3DFill,
  BsPeople
} from "react-icons/bs";
import SeviceCard from "./SeviceCard";
import { DiGoogleAnalytics } from "react-icons/di";


import background from "../../assets/services/12.jpg";

export const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: BsWindowDesktop,
      title: "Վեբ կայքերի պատրաստում․",
      description:
        "Համաձայնեք, որ անհնար է պատկերացնել շահավետ բիզնես առանց իր «վիրտուալ այցեքարտի»՝ վեբ կայքի։ ",
      content:
        ["Universal Programming Company-ն (UPC) հնարավորություն կընձեռի Ձեզ ունենալ ցանկացած տեսակի և բարդության վեբ կայքեր։ UPC-ի աշխատանքային թիմում ներգրավված պրոֆեսիոնալ մասնագետները պատրաստակամ են Ձեզ համար ստեղծել, սպասարկել և արդիականացնել ցանկացած բարդության այցեքարտային, կորպորատիվ, կատալոգային, առցանց խանութների (online shopping), անձնական, լրատվական և այլ տեսակի responsive (բջջային ադապտիվ տարբերակ) վեբ կայքեր։ Վերջինիս առկայության դեպքում անհրաժեշտությունից ելնելով կարող ենք կատարել կայքի փոփխումներ, ավելացնել ցանկացած ֆունկցիոնալ ծառայություններ, առկայության դեպքում շտկել նաև առաջացած խնդիրները և այս ամենը մատուցվում է հնարավոր սեղմ ժամկետներում՝ մատչելի գներով։"],
     
    },
    {
      id: 2,
      icon: DiGoogleAnalytics,
      title: "Մարկետինգ",
      description: 
        "Ձեր բիզնեսի առաջխաղացման համար կարևոր դեր ունի մարկեթինգային ռազմավարության ստեղումն ու իրականացումը, ինչը և առաջարկում է UPC թիմը",
      content: 
        ['SMM առաջխաղացում', 'SEO առաջխաղացում','Digital Marketing (Google Ads /PPC, OLV/)','Local SEO (Google my business)','Marketing strategy/tactics','Marketing analysis','Social media marketing (full)','Content marketing','Content Creation'],
    },
    {
      id: 3,
      icon: BsPalette,
      title: "UX / UI Դիզայն",
      description:
       "Մեր UX դիզայներների թիմը ստեղծում է հետաքրքիր և տարբերվող ինտերֆեյս՝ բոլոր տեսակի հավելվածների համար:",
      content:
       ['Վեբ դիզայն', 'Գրաֆիկ դիզայն','Լոգոների դիզայն','Լոգոների 3D դիզայն'],
    },
    {
      id: 4,
      icon: BsPeople,
      title: "Սպասարկում",
      description:
        "UPC թիմը Ապահովում է Ձեր կայքի աշխատունակությունը և զարգացումը։",
      content: 
        ['Կայքերի սպասարկում', 'Հոսթինգ և դոմեն', 'Տեխնիկական աջակցություն'],
    },
    {
      id: 5,
      icon: BsFillBadge3DFill,
      title: "Եռաչափ (3D) մոդելավորում.",
      description:
        "Universal Programming Company-ը (UPC) մատուցում է բարձրորակ եռաչափ՝ 3D մոդելավորման ծառայություն։",
      content: 
        ['UPC-ի աշխատանքային թիմի համապատասխան մասնագետների համակարգչային գրաֆիկական հմտությունները  հնարավորություն կնձեռեն Ձեզ ունենալ ցանակացած իրական կամ երևակայական անշարժ գույքի, ստատիկ օբյեկտի կամ որևէ երևույթի եռաչափ՝ 3D ձևաչափով մոդել։  Մեր մոդելավորողները մասնագիտացված Autodesk 3ds Max ունիվերսալ ծրագրի կիրառմամբ՝ մանրակրկիտ ուշադրություն դարձնելով յուրաքանչյուր դետալներին կմոդելավորվեն ցանկացած բարդության և ծավալի, իրատեսական էֆֆեկտներով ճշգրիտ 3D մոդելներ։ Իրականացվում են նաև լոգոների, այցեքարտերի, բուկլետների, կատալոգների, մենյուների յուրօրինակ դիզայնով 3D մոդելավորումներ, որոնք բացառիկ հնարավորություն են ընձեռում, որպեսզի Դուք, Ձեր ընկերությունը և/կամ բիզնեսը գործունեության ոլորտում լինի ավելի ներկայանալի և աչքի ընկնող։']
        
    },
    {
      id: 6,
      icon: BsCalculator,
      title: "Հաշվապահություն",
      description:
        "Ձեր բիզնեսի ամբողջ հաշվապահությունը կարող եք վստահել մեզ",
      content:
        ["նորաստեղծ կազմակերպությունների հաշվապահության ձևավորում","աշխատավարձի, հարկերի և սոցապ հատկացումների հաշվարկ","հաշվապահական աջակցություն","բանկային գործարքների վարում"],
    },
  ];

  const [CardInfo, setCardInfo] = useState(null);
  const [activeClass, setActiveClass] = useState("");

  function handelclick(e, data, d) {
    if (CardInfo === null) {
      const newCard = data.find((item) => item.id === d.id);
      if (newCard) {
        setCardInfo([newCard]);
        setActiveClass("open")
        console.log(e.target.parentElement)
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
            <h1>Մեր ծառայություները</h1>
          </div>
          <div className="contents">
            {servicesData.map((data) => (
              <div className="services-first" key={data.id} 
              >
                <div>
                  <h3>
                    <data.icon color="#00C9B2FF" size={42} />
                  </h3>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p> 
                </div>
                  <button className="service_details" onClick={(e) => handelclick(e, servicesData, data)}>
                    <span >
                      Տեսնել Ավելին
                    </span>
                  </button>
              </div>
            ))}
          {CardInfo && <SeviceCard data={CardInfo} setCardInfo={setCardInfo} activeClass={activeClass} setActiveClass={setActiveClass}/>}

          </div>
      </div>
    </div>
  );
};


