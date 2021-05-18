import { shallow} from 'enzyme'
import React from 'react'
import SearchBox from '../components/SearchBox'

it('renders SearchBox component', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
})