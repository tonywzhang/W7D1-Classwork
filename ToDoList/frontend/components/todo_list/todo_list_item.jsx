import React from 'react';

export const ToDoListItem = (todo) => {
  return (
    <li key={todo.id}>{todo.title}</li>
   );
};
