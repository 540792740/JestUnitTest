import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import { findDataAttribute, checkProps } from "./Utils/index"; 

const setup = (props = {}) =>{
  const component = shallow(<App {...props}/>);
  return component;
}

describe('Counter Component', () => {
  let component;
  beforeEach(()=>{
    component = setup();

  }) 
  it('should not render error',()=>{
      const wrapper = findDataAttribute(component, "div");
      expect(wrapper.length).toBe(1); 
    });

})