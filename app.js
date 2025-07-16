function addTask() {
  const task = document.getElementById('taskInput').value;
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('taskList').appendChild(li);
    localStorage.setItem('tasks', document.getElementById('taskList').innerHTML);
    document.getElementById('taskInput').value = '';
  }
}

window.onload = () => {
  document.getElementById('taskList').innerHTML = localStorage.getItem('tasks') || '';
};
