import querystring from 'querystring';

import {
  CM_COMPANY_DATA_ID,
  CM_COMPANY_FIELD_EMAIL,
  CM_SECURE_SUBSCRIBE_LINK,
} from '../constants/ApiConstants';
import { callApi } from './ApiUtils';


const generateSubscribeLink = async () => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${CM_COMPANY_DATA_ID}`,
  };
  const { result } = await callApi(CM_SECURE_SUBSCRIBE_LINK, options);
  return result;
};

export const registerApi = async (email) => {
  const form = {};
  form[CM_COMPANY_FIELD_EMAIL] = email;

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: querystring.stringify(form),
  };

  const subscribeLink = await generateSubscribeLink();
  await callApi(subscribeLink, options);
};

export default registerApi;
