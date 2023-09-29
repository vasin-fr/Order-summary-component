import "./index.sass";
import illustrationHero from "../../assets/images/illustration-hero.svg";

function Cart() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="image">
          <img src={illustrationHero} alt="Опис зображення" />
        </div>
        <div className="block-text">
          <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="tarif">
            <h3>Annual Plan</h3>
            <span>$59.99/year</span>
            <span className="step-change">Change</span>
          </div>
          <div className="Buttons">
            <button className="step-next">Proceed to Payment</button>
            <button className="step-back">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
