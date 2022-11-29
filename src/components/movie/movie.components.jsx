import React from "react";
import "./movie.css";
export const MovieComponents = ({ title, img, link, key }) => {
  console.log();
  return (
    <div className="card myCard">
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"></p>
        <a href={link} className="btn btn-primary my-buttom">
          Go somewheres
        </a>
      </div>
    </div>
  );
};
