// @flow
import querystring from 'querystring';

import {
  CM_COMPANY_DATA_ID,
  CM_COMPANY_FIELD_EMAIL,
  CM_FREELANCER_DATA_ID,
  CM_SECURE_SUBSCRIBE_LINK,
} from 'constants/ApiConstants';
import { callApi } from 'utils/api';

import type { Body as CompanyBody } from 'utils/registration/company';
import type { Body as FreelancerBody } from 'utils/registration/freelancer';

export type RegistrationType = 'company' | 'freelancer';
export type RegistrationBody = CompanyBody | FreelancerBody;

const generateSubscribeLink: Function = async (type: RegistrationType = 'company') => {
  let dataId: string = CM_COMPANY_DATA_ID;
  if (type === 'freelancer') {
    dataId = CM_FREELANCER_DATA_ID;
  }
  const options: RequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `data=${dataId}`,
  };
  const { result } = await callApi(CM_SECURE_SUBSCRIBE_LINK, options);
  return result;
};

export const register: Function = async (body: RegistrationBody, type: RegistrationType = 'company') => {
  const form: Object = {};

  if (type === 'company') {
    form[CM_COMPANY_FIELD_EMAIL] = body.email;
  } else if (type === 'freelancer') {
    form[CM_COMPANY_FIELD_EMAIL] = body.email;
  }

  const options: RequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: querystring.stringify(form),
  };

  const subscribeLink: string = await generateSubscribeLink(type);
  await callApi(subscribeLink, options);
};

export default register;
