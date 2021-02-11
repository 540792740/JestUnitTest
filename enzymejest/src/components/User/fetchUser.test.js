import fetchMock from "fetch-mock"; 
import {fetchUser} from "./Api";


const dummyUser = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
}  
      
describe('Fetch User ', () => {
    it("shows the loading text and then the data once it has been fetched", async()=>{
        const url = "https://jsonplaceholder.typicode.com/todos/1";

        fetchMock.getOnce(url, dummyUser);

        // const response = await api.fetchUser(1)
        // expect(response).toEqual(dummyUser);

        await expect(fetchUser(1)).resolves.toEqual(dummyUser);
    }) 
})
