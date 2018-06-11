import React from 'react'
import { shallow } from 'enzyme'
import Account from '.'

const wrap = (props = {}) => shallow(<Account {...props} />)

describe('Account test with JEST', () => {
    it('complete rendering', () => {
        const wrapper = shallow(<Account />);
        expect(wrapper.length).toBe(1);
    })

    it('click submit', () => {
        const wrapper = shallow(<Account />);
        wrapper.find('#submit').simulate('click');
        //expect(wrapper.profile.age).toBeLessThan(100);
    })

    /*
    it('', () => {
        ...
    })
    */
});
