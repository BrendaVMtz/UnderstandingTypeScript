import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((Response) => {
  const todo = Response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  logTodo(ID,title,finished)
});

const logTodo = (ID: number, title: string, finished: boolean) => {
  console.log(`
  ${ID}
  Title: ${title}
  Finished: ${finished}`);
};
