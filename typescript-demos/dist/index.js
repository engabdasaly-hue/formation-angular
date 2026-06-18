"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result = [];
const age = "10";
const arrNumber = [1, 2, 3, 4];
const languages = ["anglais", "français"];
const tech = ["js", 123, true];
const config = { theme: "dark", redirect: true };
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
function throwException() {
    throw new Error();
}
const user = {
    id: "eeee",
    name: "ddff",
    email: "dddd",
    nameRole: "admin",
};
const firstName = null;
const lastName = "ddd";
const handleAddTodo = (todo) => {
    return todo;
};
function logMessage(message, logLevel = "info") {
    console.log(message);
    console.log(logLevel);
}
logMessage("Hello");
//# sourceMappingURL=index.js.map