import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import TeamPage from "@/views/TeamPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import TodosComponent from "@/components/TodoSection/TodoComponent.vue";
import TableComponent from "@/components/TodoSection/TableComponent.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/product",
    component: ProductPage,
  },
  {
    path: "/team",
    component: TeamPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/todos",
    component: TodosComponent,
  },
  {
    path: "/table",
    component: TableComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
