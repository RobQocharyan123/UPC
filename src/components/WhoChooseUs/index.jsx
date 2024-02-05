import  "./style.css"
import { CiSettings,CiWallet,CiHeadphones } from "react-icons/ci";
import { SlLike,SlScreenSmartphone } from "react-icons/sl";
import { PiRocketLaunchThin } from "react-icons/pi";



export const WhoChooseUs = () =>{
    return(
        <section className="section2">
        <div className="container-who-choose-use">
            <h2>Who Choose Us</h2>
            <div className="divs">
                <div className="div1">
                    <div className="icon">
                        <CiSettings size={50} color="#45dede"/>
                    </div>
                    <div className="div-text">
                        <h5>High Quality <br/> Hardware</h5>
                        <div className="who-choose-us-item-text-block">
                           <p>We use top-notch hardware to develop the most efficient apps for our customers.</p>
                        </div> 
                    </div>
                </div>
                <div className="div1">
                    <div className="icon">
                        <CiHeadphones size={50} color="#45dede" />
                    </div>
                    <div className="div-text">
                        <h5>Dedicated 24\7 <br /> Support</h5>
                        <div  className="who-choose-us-item-text-block"> 
                           <p>You can rely on our 24/7 tech support that will gladly solve any app issue you may have..</p>
                        </div>
                    </div>
                </div>
                <div className="div1">
                    <div className="icon">
                        <CiWallet size={50} color="#45dede" />
                    </div>
                    <div className="div-text">
                        <h5>30-Day Money-back <br/> Guarantee</h5>
                        <div className="who-choose-us-item-text-block">
                           <p>If you are not satisfied with our apps, we will return your money in the first 30 days.</p>
                        </div>
                    </div>
                </div>
                <div className="div1">
                    <div className="icon">
                        <PiRocketLaunchThin size={50} color="#45dede" />
                    </div>
                    <div className="div-text">
                        <h5>Agile and Fast <br /> Working Style</h5>
                        <div className="who-choose-us-item-text-block">
                           <p>This type of approach to our work helps our specialists to quickly develop better apps.</p>
                        </div>
                    </div>
                </div>
                <div className="div1">
                    <div className="icon">
                        <SlScreenSmartphone size={50} color="#45dede" />
                    </div>
                    <div className="div-text">
                        <h5>Some Apps are <br/> Free</h5>
                        <div className="who-choose-us-item-text-block">
                           <p>We also develop free apps that can be downloaded online without any payments.</p>
                        </div>
                    </div>
                </div>
                <div className="div1">
                    <div className="icon">
                        <SlLike  size={40} color="#45dede" />
                    </div>
                    <div className="div-text">
                        <h5>High Level of <br/> Usability</h5>
                        <div className="who-choose-us-item-text-block">
                            <p>All our products have high usability allowing users to easily operate the apps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}