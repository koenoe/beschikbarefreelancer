// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './RegisterCompany.scss';

export type OwnProps = {|
  +error?: any,
  +isLoading: boolean,
  +success?: boolean,
|}

export type DispatchProps = {|
  onRegisterCompany: (email: string) => void,
|}

export type Props = {| ...OwnProps, ...DispatchProps |};

type State = {|
  email: string,
|}

export default class RegisterCompany extends PureComponent<Props, State> {
  state: State;
  onChange: (e: SyntheticInputEvent<>) => void;
  onSubmit: (e: SyntheticEvent<>) => void;

  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e: SyntheticInputEvent<>) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e: SyntheticEvent<>) {
    e.preventDefault();

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
      <div className={
        classNames({
          registerCompany: true,
          form: true,
          'form-is-loading': isLoading,
        })
      }
      >
        <h4>Ontvang het laatste overzicht met beschikbare freelancers</h4>
        {success ? (
          // REGISTER_COMPANY_SUCCESS
          <form>
            <input
              value="Bedankt, je staat op de lijst"
              type="email"
            />
            <button className="success"><div className="checkmark draw show" /></button>
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
