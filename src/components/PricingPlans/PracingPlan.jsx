import "./PracingPlan.css";

export const PricingPlans = () => {
  return (
    <section className="section1">
      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="pricing-tables">
          <div className="pricing-table">
            <div className="pricing-header">
              <p>BASIC</p>
            </div>
            <div className="item-price">
              <div>
                <span className="item-currency">$</span>
              </div>
              <div>
                <span className="item-value">399</span>
              </div>
              <div>
                <span className="item-top">99</span>
              </div>
            </div>
            <ul className="item-features">
              <li className="li-span">
                <span>
                  Concept development
                  <br /> UI design
                </span>
              </li>
              <li>Configuration management</li>
              <li>Software quality assurance</li>
              <li>App integration</li>
            </ul>
            <div className="item-control">
              <a className="a-btn">
                <button className="btn-order">ORDER NOW</button>
              </a>
            </div>
          </div>

          <div className="pricing-table">
            <div className="pricing-header">
              <div className="optimal">
                <span className="bestsellar">BESTSELLAR</span> <p>OPTIMAL</p>
              </div>
            </div>
            <div className="item-price">
              <div>
                <span className="item-currency">$</span>
              </div>
              <span className="item-value-bestsellar">599</span>
              <span className="item-top-bestsellar">99</span>
            </div>
            <ul className="item-features">
              <li className="li-span">
                <span>
                  Concept development
                  <br /> UI design
                </span>
              </li>
              <li className="li-span">Configuration management</li>
              <li className="li-span">Software quality assurance</li>
              <li>App integration</li>
            </ul>
            <div className="item-control">
              <a>
                <button className="btn-optimal">ORDER NOW</button>
              </a>
            </div>
          </div>

          <div className="pricing-table">
            <div className="pricing-header">
              <p>ULTIMATE</p>
            </div>
            <div className="item-price">
              <div>
                <span className="item-currency">$</span>
              </div>
              <div>
                <span className="item-value">999</span>
              </div>
              <div>
                <span className="item-top">99</span>
              </div>
            </div>
            <ul className="item-features">
              <li className="li-span">
                <span>Concept development</span>
                <br /> <span>UI design</span>
              </li>
              <li className="li-span">Configuration management</li>
              <li className="li-span">Software quality assurance</li>
              <li className="li-span">App integration</li>
            </ul>
            <div className="item-control">
              <a>
                <button>ORDER NOW</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
