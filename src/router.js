import { createRouter, createWebHistory } from 'vue-router';
import Contact from './views/Contact.vue';
import FrontPage from './views/FrontPage.vue';
import About from './views/About.vue';
import Service from './views/Service.vue';
import Work from './views/Work.vue';

const routes = [
  { path: '/home', component: FrontPage, name: 'Front' },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
  { path: '/service', name: 'Service', component: Service },
  { path: '/work', name: 'Work', component: Work },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
