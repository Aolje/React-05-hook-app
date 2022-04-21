const initialState = [{
    done: false,
    id: 1,
    todo: 'Comprar pan',
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    done: false,
    id: 2,
    todo: 'Comprar leche',
}

const action = {
    type: 'agregar',
    payload: newTodo,
}

todos = todoReducer(todos, action);


console.log(todos)