# JestUnitTest
    * https://github.com/simpletut/Testing-React-Redux-with-Jest-and-Enzyme

## Init in react app(old version)
    * npm install enzyme enzyme-adapter-react-16 jest jest-enzyme -D (在开发者环境中, 不上线)
    * npm test -- --coverage  --watchAll
    * yarn test --coverage --watchAll

## Jest Advantage:  
    * fast
    * Easy API
    * 隔离性好
    * 多项目运行
    * 覆盖率

## Some idea:
    * 

## Method test with instance
    * const wrapper = shallow(<Stateless />);
      const instance = wrapper.instance();
      instance.method();

## Mount Shallow, Render
    * Always begin with shallow
    * If componentDidMount or componentDidUpdate should be tested, use mount
    * If you want to test component lifecycle and children behavior, use mount
    * If you want to test children rendering with less overhead than mount and you are not interested * in lifecycle methods, use render
    
    Shallow + setProps Calls:
        * componentWillReceiveProps
        * shouldComponentUpdate
        * componentWillUpdate
        * render

    Mount + setProps Calls:
        * componentDidMount
        * componentWillReceiveProps
        * shouldComponentUpdate
        * componentWillUpdate
        * render
        * componentDidUpdate

## Test keyword:
    * expect(ModalWrapperComponent.hasClass('custom-class-name')).toEqual(true); 
    * expect(ModalWrapperComponent.props().children).toEqual('Modal Title');
    * expect(wrapper.find('p').at(2).text()).toBe('');
    * const button = component.find("button")
        button.simulate('click');
    * simulate('inputChange', {}, '12')

## find:
    * component.find('p').text();
    * component.find(`[data-test='${attr}']`)

## Snapshot
```
    it('without component', () => {  
        const ModalWrapperComponent = shallow(<ModalWrapper />);
        expect(ModalWrapperComponent).toMatchSnapshot();
    });

    it('with component', () => {  
    const props = {
           component: () => {}
        },
        ModalWrapperComponent = shallow(<ModalWrapper {...props} />);
    expect(ModalWrapperComponent).toMatchSnapshot();
});
```
## Context
```
    1. const wrapper = shallow(<MyComponentWithTheme />, {  context: 'dark' }).dive(); 

    2. MyComponentWithTheme.contextTypes = {
            name: PropTypes.string
       };
       shallow(<MyComponentWithTheme />, {context: {name: "React is Simple"}}).setContext({ name: 'some new context'}); 
    3. HOC wrapper component, pass to child context:
        mount(component, {
            context: {muiTheme}, 
            childContextTypes: {muiTheme: PropTypes.object}
        });
    4. for inner context: shallow with dive:
        mockContext = {text:'abc'}
        Context.Consumer = jest.fn((props)=> props.children({...mockContext}))
```
    * Another way:
        mount(<Context.Provider value={search:jest.fn()}> 
                <App> 
              </Context.Provider> )
## Private Router
 * https://gist.github.com/Aebrathia/0dc01cc86268b194e39ba567ec38dd9a
```
    1. App.js:
    export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )}
        />
    );

    2. test.js
    describe('<PrivateRoute/>', () => {
    it('displays passed component to authenticated users', () => {
        const props = {auth:true}
        const wrapper = shallow(<PrivateRoute {...props} />);
        const ComponentToRender = wrapper.prop('render');
        const componentWrapper = shallow(<ComponentToRender location="/scarif" />);
        expect(componentWrapper.is(props.component)).toBe(true);
        expect(componentWrapper.props()).toEqual({
            location: '/scarif'
        });
    });
});

```

## Pass Event, inner function enclosed
```
    1. app.js
        onSearch(event) {
            event.preventDefault();
            this.props.onSearch(event.target.value.trim());
        }
    2. test.js
        it('should call onChange prop', () => {
            const onSearchMock = jest.fn();
            const event = {
                preventDefault() {},
                target: { value: 'the-value' }
            };
            const component = enzyme.shallow(<InputBox onSearch={onSearchMock} />);
            component.find('input').simulate('change', event);
            expect(onSearchMock).toBeCalledWith('the-value');
        });
```

## Api return  value
    * afterEach(()=>jest.clearAllMocks())

    * jest.spyOn(api, 'method').mockRejectedValue()
    * jest.spyOn(api, 'method').mockResolvedValue()

## set props
    * component.setProps({item:'12'})

## keydown keyup
    * component.simulate('click', {
        key:'Enter',
        target:{value:'12'}
      })