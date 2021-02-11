import React from 'react';
import { shallow } from "enzyme";
import User from './User';
import fetchMock from "fetch-mock"; 
import * as api from "./Api";

const setUp = ()=>{
    const component = shallow(<User id={1} />);
    return component;
}

const nextTick = async()=>{
    return new Promise(resolve =>{
        setTimeout(resolve, 0);
    })
}


const dummyUser = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
}  

const mockFetchUser = user =>
    jest.spyOn(api, 'fetchUser') 
        .mockImplementation(()=> {return Promise.resolve(user)})

const url = "https://jsonplaceholder.typicode.com/todos/1";

const mockUrlWithUser = user =>
    fetchMock.getOnce(url, {
        status: 200,
        body: user
    })
        
describe('User component', () => {
    beforeEach(( )=> jest.restoreAllMocks())
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
      });
    // it("shows the loading text and then the data once it has been fetched", async()=>{
    //     mockUrlWithUser(dummyUser);
       
    //     const component = setUp();
    //     expect(component.find('p').text()).toEqual("Loading");
    // }); 
 
    it("shows the loading text and then the data once it has been fetched", async()=>{
        
        mockFetchUser(dummyUser);
        const component = setUp();

        await nextTick();
        component.update();

        expect(component.find('h4').text()).toEqual(dummyUser.title)

    }); 

    
})
