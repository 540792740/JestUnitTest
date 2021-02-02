import React from 'react';
import { shallow } from "enzyme";
import Header from './Header';


describe("Header Component",()=>{
    it('should not render error',()=>{
        const component = shallow(<Header/>);
        // console.log(component.debug())
        // const wrapper = component.find(".header");
        // expect(wrapper.length).toBe(1); 
    }) 
    
})
