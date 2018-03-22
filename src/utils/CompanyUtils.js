// import {
//   CM_SECURE_SUBSCRIBE_LINK,
//   CM_COMPANY_DATA_ID,
// } from '../constants/ApiConstants';

// import { callApi } from './ApiUtils';

// export const registerApi = async (email) => {
//   const options = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: `data=${CM_COMPANY_DATA_ID}`,
//   };

//   console.log('Email:', email);

//   try {
//     const { result } = await callApi(CM_SECURE_SUBSCRIBE_LINK, options);

//     const options = {};
//     const { result } = await callApi(result, options);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// export default registerApi;
