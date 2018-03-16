import React from 'react';
import { connect } from 'react-redux';

import RegisterCompany from '../components/RegisterCompany';

const RegisterCompanyContainer = props => <RegisterCompany {...props} />;


export default connect()(RegisterCompanyContainer);
