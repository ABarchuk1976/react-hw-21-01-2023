import { combineReducers } from 'redux';

const tasksInitialStore = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
};

const filtersInitialStore = {
  filters: {
    status: 'all',
  },
};

export const tasksReducer = (state = tasksInitialStore, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== action.payload)],
      };
    case 'tasks/toggleCompleted':
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => {
            return task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task;
          }),
        ],
      };
    default:
      return state;
  }
};

export const filtersReducer = (state = filtersInitialStore, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        filters: { ...state.filters, status: action.payload },
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
