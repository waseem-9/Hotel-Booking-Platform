import React from 'react';
import T1 from "../images/T1.jpg"
import T2 from "../images/T2.jpg"
import T3 from "../images/T3.jpg"
import T4 from "../images/Hotel18.jpg"
import T5 from "../images/T5.jpg"
import T6 from "../images/T6.jpg"
import './Trending.css'

const Trending = () => {
  return (
    <div className="trending-now">
      <h2>Trending now</h2>
      <p>Featured stories & fun stuff</p>

      <div className="grid">
        <div className="trend">
          <img src={T1} alt="Canary Islands" />
          <h3>9 Mistakes People Make When Visiting the Canary Islands</h3>
        </div>

        <div className="trend">
          <img src={T2} alt="Yorkshire Towns and Villages" />
          <h3>13 Most Charming Towns and Villages in Yorkshire</h3>
        </div>

        <div className="trend">
          <img src={T3} alt="Budapest Local Dishes" />
          <h3>10 Best Local Dishes from Budapest</h3>
        </div>

        <div className="trend">
          <img src={T4} alt="Bangkok Things to Do" />
          <h3>28 Best Things to Do in Bangkok</h3>
        </div>

        <div className="trend">
          <img src={T5} alt="Korean Dishes" />
          <h3>10 Great Korean Dishes</h3>
        </div>

        <div className="trend">
          <img src={T6} alt="Affordable Luxury Hotels" />
          <h3>11 Surprisingly Affordable Luxury Hotels</h3>
        </div>
      </div>
    </div>
  );
};

export default Trending;