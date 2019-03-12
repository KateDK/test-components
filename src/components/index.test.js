import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Input component', () => {
  it('renders input', () => {
    const component = shallow(<Input />);
    expect(component.exists('input')).toBe(true);
  });
  it('renders input with given value', () => {
    const value = 'Hello There!';
    const component = shallow(<Input value={value} />);
    expect(component.find('input').props().value).toEqual(value);
  });
});
