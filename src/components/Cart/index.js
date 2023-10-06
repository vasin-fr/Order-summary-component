import "./index.sass";
import illustrationHero from "../../assets/images/illustration-hero.svg";
import iconTarif from "../../assets/images/icon-music.svg";

function Cart() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="image">
          <img src={illustrationHero} alt="photo girl" />
        </div>
        <div className="block-text">
          <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="tarif">
            <div className="icon">
              <img src={iconTarif} />
            </div>
            <div className="plan">
              <h3>Annual Plan</h3>
              <span>$59.99/year</span>
            </div>
            <a className="step-change" href="#">
              Change
            </a>
          </div>
          <div className="buttons">
            <button className="step-next" curs>Proceed to Payment</button>
            <button className="step-back">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
