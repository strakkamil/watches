import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../pages/CartPage.vue"),
    },
    {
      path: "/watches",
      name: "watches",
      component: () => import("../pages/WatchesPage.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../pages/ProductPage.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../pages/PaymentPage.vue"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
