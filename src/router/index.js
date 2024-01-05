import { createRouter, createWebHistory } from 'vue-router'

// Composants
import Projets from '../components/Projets.vue';
import Contact from '../components/Contact.vue';
import Competences from '../components/Competences.vue';

// Vues
import HomePage from '../views/HomePage.vue';
import APropos from '../views/APropos.vue';
import PageNotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: APropos,
    },
    {
      path: '/projets',
      name: 'projets',
      component: Projets
    },
    {
      path: '/competences',
      name: 'competences',
      component: Competences
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: PageNotFound,
    },
  ]
})

export default router
