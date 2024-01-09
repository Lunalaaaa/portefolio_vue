import { createRouter, createWebHistory } from 'vue-router'

// Composants
import Projets from '../components/Projets.vue';
import Contact from '../components/Contact.vue';
import Competences from '../components/Competences.vue';
import RePostIt from '../components/projets/RePostIt.vue';
import Stage from '../components/projets/Stage.vue';
import Alternance from '../components/projets/Alternance.vue';
import Formation from '../components/projets/Formation.vue';
import Historique from '../components/Historique.vue';

// Vues
import APropos from '../views/APropos.vue';
import PageNotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: APropos,
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: Historique,
    },
    {
      path: '/projets',
      
      children: [
        {
          path: '',
          name: 'projets',
          component: Projets,
        },
        {
          path: 'repostit',
          component: RePostIt,
        },
        {
          path: 'stage',
          component: Stage,
        },
        {
          path: 'formation',
          component: Formation,
        },
        {
          path: 'alternance',
          component: Alternance,
        },

      ]
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
