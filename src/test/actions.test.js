import * as actions from '../actions'
import { CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED } from '../constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { apiCall } from '../api/api';

const mockStore = configureMockStore([thunkMiddleware]);

it('should have an action to search robots',() => {
  const text = 'wooo';

  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles request robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots())
  
  
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }

  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => store.dispatch( { type: REQUEST_ROBOTS_SUCCESS, payload: data } ));

    const action = store.getActions();

  expect(action[0]).toEqual(expectedAction);
  expect(action[1]).toEqual(undefined)
});