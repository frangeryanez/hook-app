import { todoReducer } from '../../src/useReducer/todoReducer';

describe('Test in todoReducer', () => {
  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false
  }];

  test('Should return the initial state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Must add a todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Demo New Todo', 
        done: false
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Must delete a todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test('Must toggle at todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    };
    
    const newState = todoReducer(initialState, action);
    expect(newState.pop().done).toBeTruthy();
  });
});