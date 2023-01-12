import React from 'react';
import SectionTitle from '../SectionTitle';
import './News.scss';
import newsImg from "../../img/news.png"

function News() {
  return ( 
    <div className="newSection">
        <a href="#" className="newsIcon">
          <img src={newsImg} alt="" />
        </a>
        <SectionTitle text={'Latest news'} titleClass={'newsTitle'} />
        <div className="newsHead">
          Latest news <span className="specialEmblem">&</span> New updates
        </div>
        <form className="newsForm">
          <div className="newsFormInput">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">subcribe</button>
          </div>
          <div className="newsFormRule">
            <input type="checkbox" id="forRule" />
            <label for="forRule"> Sign up for our newsletter </label>
          </div>
        </form>
      </div>
  );
}

export default News;