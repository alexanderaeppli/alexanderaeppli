import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import TodoApp from '../views/TodoApp';
import Oscarfaeh from '../views/Oscarfaeh';
import Contact from '../views/Contact';

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
  },
  {
    path: '/oscarfaeh',
    name: 'Oscarfaeh',
    component: Oscarfaeh,
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
