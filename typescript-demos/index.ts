const result: any = [];
const age: any = "10";
const arrNumber: Array<number> = [1, 2, 3, 4];
const languages: string[] = ["anglais", "français"];
const tech: [string, number, boolean] = ["js", 123, true];
type Config = { theme: string; redirect: boolean };
const config: Config = { theme: "dark", redirect: true };
if (typeof age === "number" && age > 18) {
  console.log("jjj");
}

function printMsg() {
  console.log("hello");
  arrNumber.forEach((element) => {
    console.log(element);
  });
  console.log(tech[1]);
}

function throwException(): never {
  throw new Error();
}

interface User {
  id: string;
  name: string;
  email: string;
}
interface Role {
  nameRole: string;
}
const user: User & Role = {
  id: "eeee",
  name: "ddff",
  email: "dddd",
  nameRole: "admin",
};

const firstName: string | null = null;

type NullOrString = string | null;
const lastName: NullOrString = "ddd";

type theme = "dark" | "light";
type margin = 20 | 40 | 60;

type Todo = {
  title: string;
  isCompleted: boolean;
};
type OnAddTodo = (todo: Todo) => Todo;

const handleAddTodo: OnAddTodo = (todo: Todo) => {
  return todo;
};

type LogLevel = "error" | "warning" | "info";

function logMessage(message: string, logLevel: LogLevel="info") {
  console.log(message);
  console.log(logLevel);
}

logMessage("Hello");
