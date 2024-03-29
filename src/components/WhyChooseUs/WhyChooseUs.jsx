import "./WhyChooseUs.css";
import { CiSettings, CiWallet, CiHeadphones } from "react-icons/ci";
import { SlLike, SlScreenSmartphone } from "react-icons/sl";
import { PiRocketLaunchThin } from "react-icons/pi";

export const WhyChooseUs = () => {
  return (
    <section className="choose" id="choose">
      <div className="choose-container">
        <h2>Ինչու Ընտրել Մեզ</h2>
        <div className="choose-container-block">
            <div className="choose-container-block-item">
              <div className="choose-container-block-item-icon">
                <CiSettings size={50} color="#45dede" />
              </div>
              <div className="choose-container-block-item-text-block">
                <h5>
                  Բարձրորակ <br /> սարքավորում
                </h5>
                <p>
                  Մենք օգտագործում ենք բարձրակարգ սարքավորումներ՝ մեր հաճախորդների
                  համար ամենաարդյունավետ հավելվածները մշակելու համար.
                </p>
              </div>
            </div>
            <div className="choose-container-block-item">
              <div className="choose-container-block-item-icon">
                <CiHeadphones size={50} color="#45dede" />
              </div>
              <div className="choose-container-block-item-text-block">
                <h5>
                  Նվիրված 24\7 <br /> աջակցություն
                </h5>
                <p>
                  Դուք կարող եք դիմել մեր 24/7 տեխնիկական աջակցության թիմին,ովքեր
                  սիրով կլուծեն ցանկացած հավելվածի խնդիր, որը դուք կարող եք
                  ունենալ...
                </p>
              </div>
            </div>
            <div className="choose-container-block-item">
              <div className="choose-container-block-item-icon">
                <CiWallet size={50} color="#45dede" />
              </div>
              <div className="choose-container-block-item-text-block">
                <h5>
                  30-օր գումարի <br />
                  վերադարձի երաշխիք
                </h5>
                <p>
                  Եթե ​​դուք գոհ չեք մեր հավելվածներից, մենք կվերադարձնենք ձեր
                  գումարը առաջին 30 օրվա ընթացքում:
                </p>
              </div>
            </div>
            <div className="choose-container-block-item">
              <div className="choose-container-block-item-icon">
                <PiRocketLaunchThin size={50} color="#45dede" />
              </div>
              <div className="choose-container-block-item-text-block">
                <h5>
                  Ճկուն և արագ <br /> աշխատանքային ոճ
                </h5>
                <p>
                  Այս տեսակի մոտեցումը օգնում է մեր մասնագետներին արագ և ճկուն
                  մշակել հավելվածները,հիմքում ունենալով որակ և պատասխանատվություն:
                </p>
              </div>
            </div>
            <div className="choose-container-block-item">
              <div className="choose-container-block-item-icon">
                <SlScreenSmartphone size={50} color="#45dede" />
              </div>
              <div className="choose-container-block-item-text-block">
                <h5>
                  Որոշ հավելվածներ <br /> անվճար են
                </h5>
                <p>
                  Մենք նաև մշակում ենք անվճար հավելվածներ, որոնք կարելի է
                  ներբեռնել առցանց՝ առանց վճարումների:
                </p>
              </div>
            </div>
            <div className="choose-container-block-item">
              <div className="choose-container-block-item-icon">
                <SlLike size={40} color="#45dede" />
              </div>
              <div className="choose-container-block-item-text-block">
                <h5>
                  Օգտագործման բարձր <br /> մակարդակ
                </h5>
                <p>
                  Մեր բոլոր ապրանքներն ունեն բարձր օգտագործելիություն, ինչը թույլ
                  է տալիս օգտվողներին հեշտությամբ գործարկել հավելվածները:
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
