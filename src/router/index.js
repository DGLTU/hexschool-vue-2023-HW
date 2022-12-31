import { createRouter, createWebHistory } from 'vue-router';
import { checkUser } from '../js/api';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminView.vue'),
    },
  ],
});
// eslint-disable-next-line consistent-return

// eslint-disable-next-line consistent-return
router.beforeEach(async (to) => {
  const isAuthenticated = await checkUser()
    .then((res) => res.config.headers.authorization)
    .catch(() => alert('請重新登入'));
  if (
    // make sure the user is authenticated
    !isAuthenticated
    && to.name !== 'home'
    && to.name === 'admin'
  ) {
    // redirect the user to the login page
    return { name: 'home' };
  }
});

export default router;
