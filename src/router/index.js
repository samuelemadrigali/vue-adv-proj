import { createRouter, createWebHistory } from "vue-router";
import auth from "./middlewares/auth";
import loggedin from "./middlewares/loggedin";
import middlewarePipeline from "./middlewares/middlewarePipeline";
import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import SigninPage from "../pages/SigninPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";
import AdminHomePage from "../pages/AdminHomePage.vue";
import AdminProductsPage from "../pages/AdminProductsPage.vue";
import Page404 from "../pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/prodotto/:id",
      name: "ProductPage",
      component: ProductPage,
    },
    {
      path: "/categoria/:id",
      name: "CategoryPage",
      component: CategoryPage,
    },
    {
      path: "/signin",
      name: "SigninPage",
      component: SigninPage,
      meta: {
        middleware: [loggedin],
      },
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
      meta: {
        middleware: [loggedin],
      },
    },
    {
      path: "/admin",
      name: "DashboardPage",
      component: DashboardPage,
      children: [
        {
          path: "",
          component: AdminHomePage,
          name: "AdminHomePage",
        },
        {
          path: "products",
          component: AdminProductsPage,
          name: "AdminProductsPage",
        },
      ],
      meta: {
        middleware: [auth],
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Page404",
      component: Page404,
    },
  ],
});

// Impostare dei middleware
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
