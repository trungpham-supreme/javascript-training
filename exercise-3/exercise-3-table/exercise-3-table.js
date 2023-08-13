let tasks = [];
const pomodoroForm = document.querySelector('.js-add-task');
const pomodoroTableBody = document.querySelector('.js-task-table-body');

function addTask(event) {
  // Prevent default action
  event.preventDefault();

  // Input form value
  const taskName = document.querySelector('.js-task-name').value;
  const pomodoroCount = document.querySelector('.js-pomodoro-count').value;

  // Validate input
  validateForm(taskName, pomodoroCount);

  // Push input task to task list
  tasks.push({
    taskName,
    pomodoroDone: 0,
    pomodoroCount,
    finished: false,
  });

  // Reset form
  this.reset();

  // Render data table
  renderTask(pomodoroTableBody, tasks);
}

function validateForm(name, count) {
  let regex = /^[a-zA-Z0-9\\,\\.\s]/g;

  if (!name || !count) {
    throw new Error('Please enter full information');
  }

  if (!name.match(regex)) {
    throw new Error('Name task must be a string');
  }

  if (isNaN(parseInt(count))) {
    throw new Error('Pomodoro count must be a number');
  }
}

function renderTask(table, tasks) {
  // Set HTML content
  table.innerHTML = tasks
    .map(
      (task, index) =>
        `
      <tr>
      <td class="cell-task-name">${task.taskName}</td>
      <td class="cell-stat
      us">${task.pomodoroDone} / ${task.pomodoroCount} pomodori</td>
      <td class="cell-controls">
      ${
        task.finished
          ? 'Finished'
          : `
      <button class="js-task-done" data-id="${index}">Done</button>
      <button class="js-increase-pomodoro" data-id="${index}">Increase Pomodoro Count</button>`
      }
      <button class="js-delete-task" data-id="${index}">Delete Task</button>
      </td>
      </tr>
      `
    )
    .join('');
}

// Handle done button
function finishTask(tasks, taskId) {
  tasks[taskId].finished = true;
}

// Handle increase pomodoro count button
function increasePomodoro(tasks, taskId) {
  // Check pomodori done against plan
  checkPomodoriDone(tasks[taskId].pomodoroDone, tasks[taskId].pomodoroCount);
  ++tasks[taskId].pomodoroDone;
}

// Handle delete button
function deleteTask(tasks, taskId) {
  tasks.splice(taskId, 1);
}

function handleClickButtonTask(event) {
  const target = event.target.className;
  const taskId = event.target.dataset.id;
  const doneTaskClass = 'js-task-done';
  const increasePomodoroClass = 'js-increase-pomodoro';
  const deleteTaskClass = 'js-delete-task';

  doneTaskClass === target
    ? finishTask(tasks, taskId)
    : increasePomodoroClass === target
    ? increasePomodoro(tasks, taskId)
    : deleteTaskClass === target
    ? deleteTask(tasks, taskId)
    : null;

  renderTask(pomodoroTableBody, tasks);
}

function checkPomodoriDone(taskDone, taskPlan) {
  if (taskDone >= taskPlan) {
    throw alert('All pomodori of plan is done');
  }
}

pomodoroForm.addEventListener('submit', addTask);
pomodoroTableBody.addEventListener('click', handleClickButtonTask);
