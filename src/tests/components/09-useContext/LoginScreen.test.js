import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctament', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({
            id: 1998,
            name: 'Alejandro'
        });
    })
})