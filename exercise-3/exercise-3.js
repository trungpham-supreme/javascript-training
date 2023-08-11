let tasks = [];
const pomodoroForm = document.querySelector('.js-add-task');
const pomodoroTableBody = document.querySelector('.js-task-table-body');

const addTask = function (event) {
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
};

function validateForm(name, count) {
  let regex = /^[a-zA-Z0-9\\,\\.\s]/g;

  if (!name || !count) {
    throw alert('Please enter full information');
  }

  if (!name.match(regex)) {
    throw alert('Name task must be a string');
  }

  if (isNaN(parseInt(count))) {
    throw alert('Pomodoro count must be a number');
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

pomodoroForm.addEventListener('submit', addTask);