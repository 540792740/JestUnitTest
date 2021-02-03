import React from 'react';
import { shallow } from "enzyme";
import CounterList from './CounterList';
import { findDataAttribute, checkProps } from "../../Utils/index"; 
import renderer from "react-test-renderer";

const setUp = (props={})=>{
    const component = shallow(<CounterList {...props}/>);
    return component;
   }
describe('CounterList Component', () => {
    
    it("Start with 2 state.count",()=>{
        let component = setUp();
        const countState = component.state().numberOfCounter;
        expect(countState).toBe(2);
    });

    it("can add more buttons when click",()=>{
        let component = setUp();
        const button = component.find("button")
        button.simulate('click');
        const countState = component.find("Counter")
        expect(countState.length).toEqual(4);

    });

})