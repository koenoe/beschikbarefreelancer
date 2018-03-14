// import PropTypes from 'prop-types';
import React from 'react';

import './Home.scss';
import illustration from './img/illustration.png';

// const defaultProps = {
//   value: '',
//   suggestions: [],
//   isLoading: false,
//   onSuggestionSelected: () => {},
// };

// const propTypes = {
//   value: PropTypes.string.isRequired,
//   suggestions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onSuggestionsFetchRequested: PropTypes.func.isRequired,
//   onSuggestionsClearRequested: PropTypes.func.isRequired,
//   onSuggestionSelected: PropTypes.func,
// };

function Home() {
  // const {} = props;

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
        <div className="form">
          <h4>Ontvang het laatste overzicht met beschikbare freelancers</h4>
          <form action="https://emiel.createsend.com/t/j/s/etruhy/" method="post" id="subForm">
            <input id="fieldEmail" name="cm-etruhy-etruhy" type="email" placeholder="Jouw email" required />
            <button type="submit"> <div className="checkmark draw" /> Aanmelden </button>
          </form>
        </div>
        <div className="clear" />
        <a href="https://emieljanson.typeform.com/to/XFteTs" className="freelancer"><strong>Freelancer?</strong> Klik hier om je beschikbaarheid door te geven</a>
      </div>
    </div>
  );
}

// SearchBox.defaultProps = defaultProps;
// SearchBox.propTypes = propTypes;

export default Home;
