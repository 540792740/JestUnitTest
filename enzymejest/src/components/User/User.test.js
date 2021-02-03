import React from 'react';
import { shallow } from "enzyme";
import User from './User';
import { findDataAttribute, checkProps } from "../../Utils/index"; 
import renderer from "react-test-renderer";

const setUp = (props={})=>{
 const component = shallow(<User {...props}/>);
 return component;
}

describe('User component', () => {
    it("setup component",()=>{
        const component = setUp();
        expect(component.length).toBe(1);
    })
})
