import React from "react";
import Card from "../Card/Card";

import "./cardContainer.scss";

const CardContainer = ({ containerTitle, data }) => {
  const renderContainerTitle = () => {
    if (containerTitle) {
      return <h2 className="card-container-title">{containerTitle}</h2>;
    } else {
      return null;
    }
  };

  const renderCards = () => {
    return data.map((obj) => {
      return <Card data={obj} key={obj.node.frontmatter.path} />;
    });
  };

  return (
    <div className="card-container" style={{ marginTop: "88px" }}>
      {renderContainerTitle()}
      <div style={{justifyContent: "center" }} className="row">{renderCards()}</div>
    </div>
  );
};

export default CardContainer;
