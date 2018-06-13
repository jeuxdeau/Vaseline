import React from 'react'
import { shallow } from 'enzyme'
import AccountUser from '.'

const wrap = (props = {}) => shallow(<AccountUser {...props} />)

describe('AccountUser test with JEST', () => {
    it('complete rendering', () => {
        const wrapper = shallow(<AccountUser />);
        expect(wrapper.length).toBe(1);
    })

    it('click submit', () => {
        const wrapper = shallow(<AccountUser />);
        wrapper.find('#submit').simulate('click');
        //expect(wrapper.profile.age).toBeLessThan(100);
    })

    /*
    it('', () => {
        ...
    })
    */
});
