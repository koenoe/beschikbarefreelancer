// @flow
export const callApi: Function = (url: string, options: RequestOptions) =>
  fetch(url, options)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const contentType: string = response.headers.get('Content-Type') || '';
      if (contentType.indexOf('json') !== -1) {
        return response.json();
      } else if (contentType.indexOf('text') !== -1) {
        return response.text();
      }
      return response;
    })
    .then(result => ({ result }: any));

export default callApi;
