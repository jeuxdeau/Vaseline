import React from 'react'
import { shallow } from 'enzyme'
import SignUp from '.'

const wrap = (props = {}) => shallow(<SignUp {...props} />)

describe('Signup test with JEST', () => {
    it('complete rendering', () => {
        const wrapper = shallow(<SignUp />);
        expect(wrapper.length).toBe(1);
    })

    it('click submit', () => {
        const wrapper = shallow(<SignUp />);
        wrapper.find('#submit').simulate('click');
        //expect(wrapper.profile.age).toBeLessThan(100);
    })

    /*
    it('', () => {
        ...
    })
    */
});
