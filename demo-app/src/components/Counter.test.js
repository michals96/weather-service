import { render, screen } from '@testing-library/react';
import { Counter } from "./Counter"

describe('Counter.js.test', () => {
    it('test1', () => {
        const counter_tmp = "123";
        //const counter = new Counter({counter : "123"});
        //console.dir(counter.props.children.props.children.props.children.props.children);
        const variable = render(<Counter counter={counter_tmp}/>);
        const result = variable.getByText(counter_tmp);
        console.log(result);
    })
})