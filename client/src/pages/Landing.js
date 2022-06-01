import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo} from "../components"
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Unemployed? You're not alone! Join hundreds of other unemployed
            individuals that meticulously keep track of their interviews, offers
            and rejections. Unemployed will allow you to gain insight into what
            does and what doesn't work with your application strategies.
            Register today!
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </Wrapper>
  );
};



export default Landing;
