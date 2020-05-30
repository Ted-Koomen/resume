import React from "react";
import { Link } from 'gatsby';
import { FaRibbon } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import './featuredCard.scss';

export default ({ headerIcon, title, body, path,subText }) => (
  <div id="featured-card" className="card blog-card">
  <DiJavascript1 style={{width: '50px', height: '50px', marginLeft: 'auto', color: 'lightskyblue'}}/>
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <i
          className="fas fa-long-arrow-alt-right"
          style={{ fontSize: "24px" }}
        />
        <p className="card-excerpt">{body}</p>
        <div className="card-bottom">
          <p className="card-excerpt">{subText}</p>
          
        </div>
      </div>
      
    </Link>
    <div className="featured">
            <p className="featured-text">Featured</p>
          </div>
  </div>
)

