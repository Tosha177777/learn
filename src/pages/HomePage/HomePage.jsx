import React from "react";
import "./HomePageCls.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <div className="mainBox">
          <div className="potentialBox">
            <h1 className="mainTitle">
              Unlock your potential with the best{" "}
              <span className="language">language</span> tutors
            </h1>
            <p className="desrPar">
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Link to={`/teachers`} className="getStarted">
              Get started
            </Link>
          </div>
          <div className="laptop"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
