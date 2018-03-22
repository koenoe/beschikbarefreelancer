export const callApi = (url, options) =>
  fetch(url, options)
    .then(
      (response) => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        const contentType = response.headers.get('Content-Type') || '';
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
      result => ({ result }),
      error => ({ error }),
    )
    .catch(error => ({ error }));

export default callApi;
