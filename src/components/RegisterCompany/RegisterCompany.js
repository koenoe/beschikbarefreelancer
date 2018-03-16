import PropTypes from 'prop-types';
import React from 'react';
import './RegisterCompany.scss';

const defaultProps = {
  isLoading: false,
};

const propTypes = {
  email: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

function RegisterCompany(props) {
  const {
    email,
    isLoading,
    onSubmit,
  } = props;

  return (
    <div className={`form ${isLoading ? 'form-is-loading' : ''}`}>
      <h4>Ontvang het laatste overzicht met beschikbare freelancers</h4>
      <form onSubmit={onSubmit}>
        <input value={email} name="cm-etruhy-etruhy" type="email" placeholder="Jouw email" required />
        <button type="submit"><div className="checkmark draw" /> Aanmelden </button>
      </form>
    </div>
  );
}

RegisterCompany.defaultProps = defaultProps;
RegisterCompany.propTypes = propTypes;

export default RegisterCompany;
