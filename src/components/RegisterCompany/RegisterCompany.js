import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './RegisterCompany.scss';

const defaultProps = {
  error: null,
  isLoading: false,
  success: null,
};

const propTypes = {
  error: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  success: PropTypes.bool,
  onRegisterCompany: PropTypes.func.isRequired,
};

class RegisterCompany extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { onRegisterCompany } = this.props;
    const { email } = this.state;

    if (typeof onRegisterCompany === 'function') {
      onRegisterCompany(email);
    }
  }

  render() {
    const { email } = this.state;
    const {
      error,
      isLoading,
      success,
    } = this.props;

    return (
      <div className={`form ${isLoading ? 'form-is-loading' : ''}`}>
        <h4>Ontvang het laatste overzicht met beschikbare freelancers</h4>
        {success ? (
          // REGISTER_COMPANY_SUCCESS
          <form>
            <input
              value="Bedankt, je staat op de lijst"
              type="email"
            />
            <button disabled type="submit" className="success"><div className="checkmark draw show" /></button>
          </form>
        ) : (
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={email}
              name="email"
              type="email"
              placeholder="Jouw email"
              required
            />
            <button disabled={isLoading} type="submit"><div className="checkmark draw" />Aanmelden</button>
          </form>
        )}
        {error &&
          // REGISTER_COMPANY_FAILURE
          <div className="error-block">Er is iets misgegaan. Probeer het later nogmaals.</div>
        }
      </div>
    );
  }
}

RegisterCompany.defaultProps = defaultProps;
RegisterCompany.propTypes = propTypes;

export default RegisterCompany;
