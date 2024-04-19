interface TodoLists{
    name: String,
    description: String,
    done: boolean
}

let todos: TodoLists[] = [];

function add(name: String, description: String) {
 return todos.push({
 name: name,
 description: description,
 done: false
 });
}

function remove(index: number) {
 return todos.splice(index, 1);
}

function list() {
 todos.forEach(function(todo, index) {
 console.log(index + " - " + todo.name);
 });
}

function update(index: number, name: String, description: String) {
 todos[index].name = name;
 todos[index].description = description;
 return todos[index];
}
