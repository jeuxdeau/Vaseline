import React from 'react'
import { shallow } from 'enzyme'
import AccountCompanion from '.'

const wrap = (props = {}) => shallow(<AccountCompanion {...props} />)

describe('AccountCompanion test with JEST', () => {
    it('complete rendering', () => {
        const wrapper = shallow(<AccountCompanion />);
        expect(wrapper.length).toBe(1);
    })

    it('click submit', () => {
        const wrapper = shallow(<AccountCompanion />);
        wrapper.find('#submit').simulate('click');
        //expect(wrapper.profile.age).toBeLessThan(100);
    })

    /*
    it('', () => {
        ...
    })
    */
});
