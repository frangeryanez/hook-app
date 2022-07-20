import { TodoAdd, TodoList } from './';
import { useTodo } from '../hooks';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPending,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo
  } = useTodo();
  return (
    <>
      <h1>
        Todo App: { todosCount }, 
        <small>Slopes: { todosPending }</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={ todos }
            onRemoveTodo={ handleRemoveTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onAddTodo={ handleAddTodo } />
        </div>
      </div>
    </>
  );
};