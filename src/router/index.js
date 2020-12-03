import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Devices from '../views/Devices.vue';
import SensorData from '../views/SensorData.vue';

Vue.use(VueRouter);

function loggedInRedirectDashboard(to, from, next) {
  if (localStorage.token) {
    next('/dashboard');
  } else {
    next();
  }
}

function isLoggedIn(to, from, next) {
  if (!localStorage.token) {
    next('/login');
  } else {
    next();
  }
}
const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
}, {
  path: '/signup',
  name: 'signup',
  component: Signup,
  beforeEnter: loggedInRedirectDashboard,
}, {
  path: '/login',
  name: 'login',
  component: Login,
  beforeEnter: loggedInRedirectDashboard,
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard,
  beforeEnter: isLoggedIn,
}, {
  path: '/devices',
  name: 'Devices',
  component: Devices,
  beforeEnter: isLoggedIn,
}, {
  path: '/sensor-data',
  name: 'sensor-data',
  component: SensorData,
  beforeEnter: isLoggedIn,
}];
const router = new VueRouter({
  routes,
});
export default router;
