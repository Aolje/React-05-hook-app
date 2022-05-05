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

    test('should de borrar un todo', () => {
        // action.payload = it del todo
        const newTodo = [{
            id: 2,
            desc: 'Aprender Mongo',
            done: false
        }];
        const action = {
            type: 'delete',
            payload: 1
        };
        const state = todoreducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual(newTodo);
    });

    test('should de hacer el toggle del todo', () => {
       
        const action = {
            type: 'toggle',
            payload: 1
        };
        const state = todoreducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

    })
})