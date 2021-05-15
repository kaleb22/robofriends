import { shallow} from 'enzyme'
import React from 'react'
import CardList from '../components/CardList'

it('expect to render cardList component', () => {

  const mockRobots = [{
    id: 1,
    email: "JohnDoe@gmail.com",
    name: "John Doe"
  }]

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})