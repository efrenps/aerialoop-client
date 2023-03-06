import { createWebHistory, createRouter } from "vue-router";
import UploadData from '@/components/UploadData.vue'
import DisplayData from '@/components/DisplayData.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: DisplayData,
  },
  {
    path: "/upload",
    name: "upload",
    component: UploadData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;