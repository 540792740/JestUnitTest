import Enzeme from "enzyme";
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzeme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true, 
})