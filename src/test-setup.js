// @flow
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';

declare var global: { fetch: any }

const mockFetch: Promise<> = fetch;
global.fetch = mockFetch;

const options: Object = {
  adapter: new Adapter(),
};
configure(options);
