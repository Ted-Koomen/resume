import React from "react";
import { Card } from "react-bootstrap";
import "./card.scss";
import moment from 'moment';

export default ({ data }) => {
  const {
    node: {
      frontmatter: {
        author,
        description,
        featured,
        image: { relativePath },
        posttype,
        title,
        date
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
    <div className="row">
      <div className="col-md-12 blog-card">
        <img
          className="card-img-top"
          style={{ height: "300px", width: "362px" }}
          src={require(`../../images/${posttype}-post.png`)}
        />
        <div style={{maxWidth: "100%" }} className="post-info">
          <div className={`card-title post-type post-type-${posttype}`}>
            {posttype}
          </div>
          <div style={{maxWidth: "287px"}} className="card-body">{description}</div>
          <div style={{maxWidth: "287px"}} className="post-date">{formatDate()}</div>
        </div>
      </div>
    </div>
  );
};
