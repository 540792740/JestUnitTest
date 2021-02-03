import checkPropypes from "check-prop-types"

export const findDataAttribute = (component, attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};