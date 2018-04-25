// @flow
import type { mockStore, mockStoreWithoutMiddleware } from 'redux-mock-store';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const store: mockStore = configureMockStore([thunk]);

export default store;

export type Store = mockStoreWithoutMiddleware<any, any>;
