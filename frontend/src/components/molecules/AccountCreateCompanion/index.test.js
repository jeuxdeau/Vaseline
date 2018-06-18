import React from 'react'
import { shallow } from 'enzyme'
import AccountCreateCompanion from '.'

const wrap = (props = {}) => shallow(<AccountCreateCompanion {...props} />)

describe('AccountCreateCompanion test with JEST', () => {
    it('complete rendering', () => {
        const wrapper = shallow(<AccountCreateCompanion />);
        expect(wrapper.length).toBe(1);
    })

    it('click submit', () => {
        const wrapper = shallow(<AccountCreateCompanion />);
        wrapper.find('#submit').simulate('click');
        //expect(wrapper.profile.age).toBeLessThan(100);
    })

    /*
    it('', () => {
        ...
    })
    */
});
