import {render} from '@testing-library/react'
import App from './App';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe('Testing App', () => {
    test('Mount', () => {
        const {container} = render(<App/>);
        expect(container).toBeDefined();
    });
    test('List of currencies', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("button").length).toEqual(4);
    });
    test('Choose a currency', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find("button").length).toEqual(4);
        wrapper.find('button').first().simulate('click');
        setTimeout(() => {
            expect(wrapper.find("#dashboard").length).toEqual(1);
            expect(wrapper.find("#price").length).toEqual(1);
        }, 2000);
    });
})
