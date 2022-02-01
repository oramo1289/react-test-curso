import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('pruebas en hooksapp component', () => {
    const wrapper = shallow( <HooksApp/> );

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})