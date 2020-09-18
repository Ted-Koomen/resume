import React from "react";
import Img from 'gatsby-image';
import { Link } from 'gatsby'
import "./card.scss";
import moment from 'moment';

export default ({ data }) => {
  const {
    node: {
      frontmatter: {
        description,
        image: { childImageSharp },
        posttype,
        date,
        path
      },
    },
  } = data;

  const formatDate = () => {
    if (date) {
      return moment(date).format('MMMM DD, YYYY')
    } else {
     return ''
    }
  }
  return (
    <div className="single-card-container" style={{width: "362px", margin: "0px 20px 0px 20px" }}>
      <Link to={path}>
      <div className="col-md-12 blog-card">
        <Img fluid={childImageSharp.fluid} style={{ height: "300px", width: "362px" }} />
        <div style={{maxWidth: "100%" }} className="post-info">
          <div className={`card-title post-type post-type-${posttype}`}>
            {posttype}
          </div>
          <div style={{maxWidth: "287px"}} className="card-body">{description}</div>
          <div style={{maxWidth: "287px"}} className="post-date">{formatDate()}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};
