// @flow
import React from 'react';

import RegisterCompanyContainer from 'containers/RegisterCompany';
import illustration from './img/illustration.png';
// import './Home.scss';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <RegisterCompanyContainer />
        </div>
        <div className="col-6">
          <img className="img-fluid" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
