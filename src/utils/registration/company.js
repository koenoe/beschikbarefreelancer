// @flow
import { register as registerApi } from 'utils/registration';

export type Body = {|
  email: string,
|};

export const register: Function = async (email: string) => {
  const body: Body = {
    email,
  };
  await registerApi(body, 'company');
};

export default register;
