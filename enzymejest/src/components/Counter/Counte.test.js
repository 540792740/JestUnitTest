import React from 'react';
import { shallow } from "enzyme";
import Counter from './Counter';
import { findDataAttribute, checkProps } from "../../Utils/index"; 
import renderer from "react-test-renderer";

const setUp = (props={})=>{
 const component = shallow(<Counter {...props}/>);
 return component;
}

describe('Counter Component', () => {
    it('Match the snapshoot',()=>{
        const tree = renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    it("Start with 0 state.count",()=>{
        let component = setUp();
        const countState = component.state().count;
        expect(countState).toBe(0);
    });

    it("will increase count when click +",()=>{
        let component = setUp();
        const increaseBtn = component.find('button.increase');
        increaseBtn.simulate('click');
        const text = component.find('p').text();
        expect(text).toBe("Current Count: 1");
    });

    it("will decrease count when click +",()=>{
        let component = setUp();
        const increaseBtn = component.find('button.decrease');
        increaseBtn.simulate('click');
        const text = component.find('p').text();
        expect(text).toBe("Current Count: -1");
    });
})
