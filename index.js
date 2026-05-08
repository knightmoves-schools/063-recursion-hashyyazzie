function transform(todos) {
  // Base case: if the array is empty, return an empty array
  if (todos.length === 0) {
    return [];
  }

  // Line 8: Prepend 'done - ' to the first description in the current array
  const updatedFirstTodo = 'done - ' + todos[0];

  // Line 9: Recursively call transform with the remaining items
  return [updatedFirstTodo].concat(transform(todos.slice(1)));
}

// Example usage:
const myTodos = ['Task 1', 'Task 2', 'Task 3'];
const result = transform(myTodos);

console.log(result);
// Output: ['done - Task 1', 'done - Task 2', 'done - Task 3']
