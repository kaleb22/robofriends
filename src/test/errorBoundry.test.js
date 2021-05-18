import { shallow} from 'enzyme'
import React from 'react'
import ErrorBoundry from '../components/ErrorBoundry'

it('renders ErrorBoundry component', () => {
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
})

it('has an error', () => {
  const wrapper = shallow(<ErrorBoundry/>);
  expect(wrapper.instance().componentDidCatch()).toEqual(undefined);
})