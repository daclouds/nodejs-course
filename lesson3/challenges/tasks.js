/*
$ node tasks.js list
$ node tasks.js clear
$ node tasks.js add <task>
*/

let tasks = initialData();
let command = process.argv[2];

switch (command) {
  case 'list':
    listTasks();
    break;
  case 'clear':
    clearTasks();
    break;
  case 'add':
    addTask();
    break;
  default:
    help();
}

function initialData() {
 fs.readFile('tasks.txt', (file) => {
   tasks = file.toString().split('\n');
 });
 return  
}

function listTasks() {
  if (tasks.length === 0) {
    console.log('Found no tasks.');
  } else {
    console.log('Found', tasks.length, 'tasks.');
    for (let i = 0; i < tasks.length; i++) {
      console.log(i + 1, tasks[i]);
    }
  }
}

function clearTasks() {
  tasks = [];
  console.log(`Cleared up the tasks. (${tasks.length} tasks)`);
  fs.writeFile('tasks.txt', '');
}

function addTask() {
  let task = process.argv.splice(3).join(' ');
  tasks.push(task);
  console.log(`Added the given task. (${tasks.length} tasks)`);
  fs.writeFile('tasks.txt', tasks.join('\n'));
}

function help() {
  console.log('-------------------- HOW TO USE --------------------');
  console.log('$ node tasks.js list: list up all the tasks.');
  console.log('$ node tasks.js clear: clear up all the tasks.');
  console.log('$ node tasks.js add <task>: add the given task. ');
  console.log('----------------------------------------------------');
}
