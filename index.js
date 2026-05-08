/**
 * Recursively prepends 'done - ' to each todo description.
 * @param {string[]} todos - An array of todo descriptions.
 * @returns {string[]} - A new array with all todos marked as done.
 */
function markAsDone(todos) {
  // Base Case: If the array is empty, we stop and return an empty array
  if (todos.length === 0) {
    return [];
  }

  // Recursive Step:
  // 1. Process the first item
  const updatedFirstTodo = 'done - ' + todos[0];

  // 2. Recursively call the function with the rest of the array (all items except the first)
  const remainingTodos = markAsDone(todos.slice(1));

  // 3. Return the modified first item combined with the results of the recursion
  return [updatedFirstTodo, ...remainingTodos];
}

// Example usage:
const tasks = ['buy groceries', 'clean windows', 'fix sink'];
console.log(markAsDone(tasks)); 
// Output: ['done - buy groceries', 'done - clean windows', 'done - fix sink']
