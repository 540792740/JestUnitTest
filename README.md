# JestUnitTest
    * https://github.com/simpletut/Testing-React-Redux-with-Jest-and-Enzyme

## Init in react app(old version)
    * npm install enzyme enzyme-adapter-react-16 jest jest-enzyme -D
    * npm test -- --coverage
## Jest Advantage:  
    * fast
    * Easy API
    * 隔离性好
    * 多项目运行
    * 覆盖率

## Some idea:
    * npm install jest -D (在开发者环境中, 不上线)

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
