import { CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED } from '../constants'

import * as reducers from '../reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({ searchField: 'abc'});
  })

})

describe('requestRobots', () => {
  const initialState = {
    isPending: false,
    robots: [],
    error: ''
  }

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({ 
      isPending: false,
      robots: [],
      error: ''
    });
  })

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_PENDING,
    })).toEqual({ 
      isPending: true,
      robots: [],
      error: ''
    });
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: 1,
        name: 'test',
        email: 'test@test.com'
      }]
    })).toEqual({ 
      robots: [{
        id: 1,
        name: 'test',
        email: 'test@test.com'
      }],
      isPending: false,
      error: ''
    });
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'abc'
    })).toEqual({ 
      isPending: false,
      error: 'abc'
    });
  })

})