import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <homeScreen />', () => {
    const user = {
        name: 'alejandro',
        email: 'alejo@alejo.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={user}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('Debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
})