// @flow
import { register as registerApi } from 'utils/registration';

export type Body = {|
  email: string,
  name: string,
|};

export const register: Function = async (body: Body) => {
  await registerApi(body, 'freelancer');
};

export default register;
