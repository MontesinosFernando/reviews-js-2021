import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  return(
    <>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <article class="review">
          <div className="img-container">
            <img src="" alt="" className="person-img"></img>
            <span className="quote-icon">
              <FaQuoteRight/>
            </span>
          </div>
          <h4 className="author"></h4>
          <p className="job"></p>
          <p className="info"></p>
          <div className="button-container">
            <button className="prev-btn">
              <FaChevronLeft/>
            </button>
            <button className="next-btn">
              <FaChevronRight/>
            </button>
            
          </div>
          <button className="random-btn">Random</button>
        </article>
      </section>
    </>
  );
};

export default Review;
