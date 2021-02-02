import React from 'react';
import { shallow } from "enzyme";
import Headlines from './Headlines';
import { findDataAttribute } from "../../Utils/index"; 

const setUp = (props={})=>{
 const component = shallow(<Headlines {...props}/>);
 return component;
}

describe("Headlines component",()=>{
    describe("have props",()=>{
        let wrapper; 
        beforeEach(()=>{
            const props = {
                header: "header",
                desc : "descibe",
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findDataAttribute(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });
        
        it('Should render H1', () => {
            const h1 = findDataAttribute(wrapper, 'header');
            expect(h1.length).toBe(1);
        });
        

    });

    describe("have no props",()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        })
        it('Should render without errors', () => {
            const component = findDataAttribute(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    })
})