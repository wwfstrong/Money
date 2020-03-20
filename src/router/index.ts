import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Detailed from '@/views/Detailed.vue';
import Charts from '@/views/Charts.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/detailed'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/detailed',
    component: Detailed
  },
  {
    path: '/charts',
    component: Charts
  },
  {
    path: '/detailed/edit/:id',
    component: EditLabel
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
