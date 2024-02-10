

import React from 'react'
import './Header.css';
import back1 from "../../assets/header/image-corusel1.jpg"
import back2 from "../../assets/header/image-corusel2.jpg"
import Nav from './nav/Nav';
import Section1 from './corusel/Corusel';
import Slaq from './slaq/Slaq';

export const Header = () => {
  const items = [
    { 
      imgUrl:back1,
      titleMas1: 'Բարի գալուստ Univaersal', 
      titleMas2:"Programing Company",  
      content: "Universal Programming Company-ն (UPC) ծրագրավորման ոլորտում գործունեության լայն սպեկտր ունեցող ընկերություն է, որի աշխատանքային թիմի պրոֆեսիոնալ մոտեցումները և ժամանակակից տեխնոլոգիական լուծումները հնարավորություն են տալիս ցանկացած կազմակերպությանը կամ բիզնեսին գործունեության ոլորտում ունենալ շարունակական և արդյունավետ առաջխաղացում։"
    },
    { 
      imgUrl:back2,
      titleMas1: 'Վեբ կայքերի', 
      titleMas2:"պատրաստում", 
      content: 'Համաձայնեք, որ անհնար է պատկերացնել շահավետ բիզնես առանց իր «վիրտուալ այցեքարտի»՝ վեբ կայքի։ Universal Programming Company-ն (UPC) հնարավորություն կընձեռի Ձեզ ունենալ ցանկացած տեսակի և բարդության վեբ կայքեր։ UPC-ի աշխատանքային թիմում ներգրավված պրոֆեսիոնալ մասնագետները պատրաստակամ են Ձեզ համար ստեղծել, սպասարկել և արդիականացնել ցանկացած բարդության այցեքարտային, կորպորատիվ, կատալոգային, առցանց խանութների (online shopping), անձնական, լրատվական և այլ տեսակի responsive (բջջային ադապտիվ տարբերակ) վեբ կայքեր։' 
    },
  ];

  return (
    <div className="App">
      <header className='header'>
         <Nav />
      </header>
      <Section1 items={items} />
      <Slaq/>
    </div>
  );
}
