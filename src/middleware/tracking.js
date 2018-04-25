// @flow
import ReactPixel from 'react-facebook-pixel';
import { REGISTER_COMPANY_SUCCESS } from 'actions/RegisterCompanyActions';

import type { Action } from 'actions';

const eventsMapper = (action: Action) => {
  switch (action.type) {
    case REGISTER_COMPANY_SUCCESS:
      return ReactPixel.track('CompleteRegistration', {
        content_name: 'company',
      });
    default:
      return [];
  }
};

const trackingMiddleware = () => (next: any) => (action: Action) => {
  eventsMapper(action);
  return next(action);
};

export default trackingMiddleware;
