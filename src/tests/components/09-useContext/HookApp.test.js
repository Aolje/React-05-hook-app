import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from "../../../HookApp";

describe('Prueba en HookApp', () => {
    test('Debera mostrar el componente correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
})