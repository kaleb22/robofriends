import { shallow} from 'enzyme'
import React from 'react'
import MainPage from '../components/MainPage'

let wrapper;

beforeEach( () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }

  wrapper = shallow(<MainPage { ...mockProps }/>);
})

it('renders MainPage component', () => {
  expect(wrapper).toMatchSnapshot();
});

it(' filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John Doe',
      email: 'John@gmail.com'
    }],
    searchField: 'John',
    isPending: true
  }

  const wrapper2 = shallow(<MainPage { ...mockProps2 }/>);

  expect(wrapper.instance().filteredRobots()).toEqual([]);
  expect(wrapper2.instance().filteredRobots()).toEqual([{
    id: 3,
    name: 'John Doe',
    email: 'John@gmail.com'
  }]);
});


