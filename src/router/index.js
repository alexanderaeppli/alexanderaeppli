import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home';
import TodoApp from '../views/TodoApp';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo-app',
    name: 'TodoApp',
    component: TodoApp,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
