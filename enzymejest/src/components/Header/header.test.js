import React from 'react';
import { shallow } from "enzyme";
import Header from './Header';
import { findDataAttribute } from "../../Utils/index"; 

const setup = (props = {}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
}


describe("Header Component",()=>{
    let component;

    beforeEach(()=>{
        component = setup();
    })

    it('should not render error',()=>{
        const wrapper = findDataAttribute(component, "header");
        expect(wrapper.length).toBe(1); 
    }) ;
    it('should render a logo',()=>{
        const logo = findDataAttribute(component, "logoIMG") ;
        expect(logo.length).toBe(1); 
    }) 
    
})
