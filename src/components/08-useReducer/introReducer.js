const initialState = [{
    id: 1,
    todo: 'Curso Angular',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if( action.type == 'agregarTodoAction' ){}

    return state;
};


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Curso React',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};


todos = todoReducer(todos, agregarTodoAction);