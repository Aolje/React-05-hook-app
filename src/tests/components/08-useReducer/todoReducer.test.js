import { todoreducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        const state = todoreducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });
    test('Debe de agregar un TODO', () => {
        const newTodo = [
            {
                id: 3,
                desc: 'Aprender Angular',
                done: false
            },
        ];
        const action = {
            type: 'add',
            payload: newTodo
        }
        const state = todoreducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });
})