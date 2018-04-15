// @flow
export const callApi: Function = (url: string, options: RequestOptions) =>
  fetch(url, options)
    .then(
      (response: Response) => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        const contentType: string = response.headers.get('Content-Type') || '';
        if (contentType.indexOf('json') !== -1) {
          return response.json();
        } else if (contentType.indexOf('text') !== -1) {
          return response.text();
        }
        return response;
      },
      error => Promise.reject(error),
    )
    .then(
      result => ({ result }: any),
      error => ({ error }: any),
    )
    .catch(error => ({ error }: any));

export default callApi;
