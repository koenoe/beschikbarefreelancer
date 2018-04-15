// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fetch as mockFetch } from 'jest-fetch-mock';

declare var global: { fetch: any }

const globalMockFetch: Promise<> = mockFetch;
global.fetch = globalMockFetch;

const options: Object = {
  adapter: new Adapter(),
};
configure(options);
