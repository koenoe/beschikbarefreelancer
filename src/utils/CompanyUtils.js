// @flow
import querystring from 'querystring';

import {
  CM_COMPANY_DATA_ID,
  CM_COMPANY_FIELD_EMAIL,
  CM_SECURE_SUBSCRIBE_LINK,
} from 'constants/ApiConstants';
import { callApi } from './ApiUtils';


const generateSubscribeLink: Function = async () => {
  const options: RequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${CM_COMPANY_DATA_ID}`,
  };
  const { result } = await callApi(CM_SECURE_SUBSCRIBE_LINK, options);
  return result;
};

export const register: Function = async (email: string) => {
  const form: Object = {};
  form[CM_COMPANY_FIELD_EMAIL] = email;

  const options: RequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: querystring.stringify(form),
  };

  const subscribeLink: string = await generateSubscribeLink();
  await callApi(subscribeLink, options);
};

export default register;
