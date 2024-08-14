import React, { Fragment } from "react";
import "../assets/Styles/homestyle.css";
import { lateststories } from "../homedata/homedata1";
import { todaystories } from "../homedata/homedata2";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <Fragment>
      <div className="Home-wrap">
      <div className="lateststories">
        <p >NEWLY PENNED</p>
      </div>
      <div className="latestcontainer">
        {lateststories.map((ls) => (
          <div key={ls.id} className="lsp">
            <Link to={`/product/${ls.id}`}>
              <img src={ls.image} alt={ls.title} />
            </Link>
            <div className="ls-details">
              <h2>{ls.title}</h2>
              <p>{ls.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todaystories">
        <p>TODAY'S PICKS</p>
      </div>
      <div className="todaycontainer">
        {todaystories.map((tp) => (
          <div key={tp.id} className="tp">
            <Link to={`/product/${tp.id}`}>
              <img src={tp.image} alt={tp.title} />{" "}
            </Link>
            <div className="tp-details">
              <h2>{tp.title}</h2>
              <p>{tp.description}</p>
            </div>
          </div>
        ))}
      </div></div>
    </Fragment>
  );
};

export default Homepage;
