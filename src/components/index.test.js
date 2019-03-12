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
  it('calls onChange handler with a new value', () => {
    const value = ' Hello There!';
    const newValue = 'New Test Value';
    const onChange = jest.fn();

    const component = shallow(<Input value={value} onChange={onChange} />);

    const evt = { target: { value: newValue } };
    component.find('input').simulate('change', evt);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(newValue);
  });
  it('has an error state', () => {
    const component = shallow(<Input error />);
    expect(component.hasClass('error')).toBe(true);
  });
});
