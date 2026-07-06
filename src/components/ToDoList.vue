<template>
  <div class="todo-box">
    <div class="todo-input">
      <input
        type="text"
        v-model="newTask"
        placeholder="Enter a new task"
        @keyup.enter="addTask"
        >

      <button type="button" @click="addTask">
        Add
      </button>
    </div>

    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>

    <table v-if="tasks.length > 0">
      <thead>
        <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>
            {{ task.text }}
            <strong v-if="task.priority === 'High'">(High Priority)</strong>
            <span v-else-if="task.priority === 'Low'">(Low Priority)</span>
          </td>

          <td>{{ getPriorityText(task) }}</td>

          <td>
            <button type="button" @click="togglePriority(task)">
              {{ getPriorityButtonText(task) }}
            </button>

            <button type="button" @click="deleteTask(task.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>No tasks added yet.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      errorMessage: '',
      tasks: []
    }
  },

  methods: {
    addTask() {
      const taskText = this.newTask.trim()

      if (taskText === '') {
        this.errorMessage = 'Please enter a task.'
        return
      }

      this.tasks.unshift({
        id: Date.now(),
        text: taskText,
        priority: 'None'
      })

      this.newTask = ''
      this.errorMessage = ''
    },

    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    },

    togglePriority(task) {
      if (task.priority === 'None') {
        task.priority = 'High'
      } else if (task.priority === 'High') {
        task.priority = 'Low'
      } else {
        task.priority = 'None'
      }
    },

    getPriorityText(task) {
      return task.priority === 'None' ? 'No Priority' : task.priority
    },

    getPriorityButtonText(task) {
      if (task.priority === 'None') {
        return 'Mark as High Priority'
      }

      if (task.priority === 'High') {
        return 'Mark as Low Priority'
      }

      return 'Remove Priority'
    }
  }
}
</script>

<style scoped>
.todo-box {
  max-width: 900px;
}

.todo-input {
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
}

input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}

input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

button {
  padding: 9px 12px;
  margin-right: 6px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.todo-input button {
  background-color: #2563eb;
  color: white;
}

td button:first-child {
  background-color: #facc15;
  color: #111827;
}

td button:last-child {
  background-color: #dc2626;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 18px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

th,
td {
  border: 1px solid #e5e7eb;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f9fafb;
  font-weight: 700;
}

.error {
  color: #dc2626;
}
</style>