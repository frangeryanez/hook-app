const initialState = [{
  id: 1,
  todo: 'Collect the soul stone', 
  done: false,
}];

const todoReducer = (state=initialState, action={}) => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Collect the stone of power', 
  done: false,
};

const addTodoAction = {
  type: '[TODO] Add Todo',
  payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);