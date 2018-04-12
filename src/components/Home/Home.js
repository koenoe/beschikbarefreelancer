// import PropTypes from 'prop-types';
import React from 'react';

import RegisterCompanyContainer from 'containers/RegisterCompanyContainer';
import illustration from './img/illustration.png';
import './Home.scss';

function Home() {
  return (
    <div>
      <img src="illustration.png" className="mobile" alt="" />
      <h1>De Beschikbare Freelancers Nieuwsbrief</h1>
      <div id="right">
        <img src={illustration} alt="" />
      </div>
      <div id="left">
        <p>
          Ontvang iedere maand een overzicht met goede freelance
          beschikbare developers, copywriters, designers, marketing people
          en iedereen die je nodig hebt om een digitaal product te bouwen.
        </p>
        <RegisterCompanyContainer />
        <div className="clear" />
        <a href="https://emieljanson.typeform.com/to/XFteTs" className="freelancer">
          <strong>Freelancer?</strong> Klik hier om je beschikbaarheid door te geven
        </a>
      </div>
    </div>
  );
}

export default Home;
