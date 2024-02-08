import "./style.css";

export const PricingPlans = () => {
  return (
    <section className="section1">
      <div className="container">
        <h2>Գնային Պլաններ</h2>
        <div className="pricing-tables">
          <div className="pricing-table">
            <div className="pricing-header">
              <p>ՀԻմնական</p>
            </div>
            <div className="item-price">
              
              <div>
                <span className="item-value">$399</span>
              </div>
              <div>
                <span className="item-top">99</span>
              </div>
            </div>
            <ul className="item-features">
              <li className="li-span">
                <span>
                 Հայեցակարգի մշակում, 
                  <br/> UI դիզայն
                </span>
              </li>
              <li>Կազմաձևման կառավարում</li>
              <li>Ծրագրային ապահովման <br/> որակի ապահովում</li>
              <li>Հավելվածի ինտեգրում</li>
            </ul>
            <div className="item-control">
              <a className="a-btn">
                <button className="btn-order">ՊԱՏՎԻՐԵՔ ՀԻՄԱ</button>
              </a>
            </div>
          </div>

          <div className="pricing-table">
            <div className="pricing-header">
              <div className="optimal">
                <span className="bestsellar">ԼԱՎԱԳՈՒՅՆ</span> <p>ՕՊՏԻՄԱԼ</p>
              </div>
            </div>
            <div className="item-price">
              <span className="item-value-bestsellar">$599</span>
              <span className="item-top-bestsellar">99</span>
            </div>
            <ul className="item-features">
              <li className="li-span">
                <span>
                 Հայեցակարգի մշակում, 
                  <br/> UI դիզայն
                </span>
              </li>
              <li className="li-span">Կազմաձևման կառավարում</li>
              <li className="li-span">Ծրագրային ապահովման <br/> որակի ապահովում</li>
              <li>Հավելվածի ինտեգրում</li>
            </ul>
            <div className="item-control">
              <a>
                <button className="btn-optimal">ՊԱՏՎԻՐԵՔ ՀԻՄԱ</button>
              </a>
            </div>
          </div>

          <div className="pricing-table">
            <div className="pricing-header">
              <p>ԱՌԱՎԵԼԱԳՈՒՅՆ</p>
            </div>
            <div className="item-price">
              <div>
                <span className="item-value">$999</span>
              </div>
              <div>
                <span className="item-top">99</span>
              </div>
            </div>
            <ul className="item-features">
              <li className="li-span">
                <span>Հայեցակարգի մշակում, 
                  <br/> UI դիզայն</span>
              </li>
              <li className="li-span">Կազմաձևման կառավարում</li>
              <li className="li-span">Ծրագրային ապահովման <br/> որակի ապահովում</li>
              <li className="li-span">Հավելվածի ինտեգրում</li>
            </ul>
            <div className="item-control">
              <a>
                <button>ՊԱՏՎԻՐԵՔ ՀԻՄԱ</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
