// @flow
import { callApi } from 'utils/ApiUtils';

describe('Utils: ApiUtils', () => {
  describe('when calling `callApi`', () => {
    afterEach(() => {
      fetch.resetMocks();
    });
    it('should be able to return `json`', async () => {
      fetch.mockResponseOnce(JSON.stringify({
        foo: 'bar',
      }), {
        method: 'GET',
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const options: RequestOptions = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { result } = await callApi('https://beschikbarefreelancer.nl', options);
      expect(result).toEqual({
        foo: 'bar',
      });
    });
    it('should be able to return `text`', async () => {
      fetch.mockResponseOnce('foo', {
        method: 'GET',
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
      const options: RequestOptions = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      const { result } = await callApi('https://beschikbarefreelancer.nl', options);
      expect(result).toEqual('foo');
    });
  });
});
