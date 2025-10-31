import React from 'react';
import '../styles/Prizes.css';

const Prizes = () => {
  return (
    <section className="prizes" id="prizes">
      <div className="container">
        <h2 className="heading">Prizes</h2>

        <div className="cards-wrapper">
          <div className="card gold">
            <div className="trophy">
              <img 
                src="/gold_trophy.png" 
                alt="Gold Trophy" 
                className="trophy-img"
              />
            </div>
            <div className="details">
              <h3 className="amount">INR XXXX</h3>
              <p className="position">First Place</p>
              <p className="desc">Cash Prize for 1st position</p>
            </div>
          </div>
          <div className="card silver">
            <div className="trophy">
              <img 
                src="/silver_trophy.png" 
                alt="Silver Trophy" 
                className="trophy-img"
              />
            </div>
            <div className="details">
              <h3 className="amount">INR XXXX</h3>
              <p className="position">First Runner Up</p>
              <p className="desc">Cash Prize for 2nd position</p>
            </div>
          </div>
          <div className="card bronze">
            <div className="trophy">
              <img 
                src="/bronze_trophy.png" 
                alt="Bronze Trophy" 
                className="trophy-img"
              />
            </div>
            <div className="details">
              <h3 className="amount">INR XXXX</h3>
              <p className="position">Second Runner Up</p>
              <p className="desc">Cash Prize for 3rd position</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;