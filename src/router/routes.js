import HomePage from "../pages/HomePage.vue";
import CommandsPage from "../pages/CommandsPage.vue";
import ResourcesPage from "../pages/ResourcesPage.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    meta: {
      icon: "mdi:home",
    },
  },

  {
    name: "Commands",
    path: "/commands",
    component: CommandsPage,
    meta: {
      icon: "mdi:terminal",
    },
  },
  {
    name: "Resources",
    path: "/resources",
    component: ResourcesPage,
    meta: {
      icon: "mdi:bookmark",
    },
  },
  {
    name: "Not Found",
    path: "/:catchAll(.*)",
    redirect: {
      path: "/",
    },
  },
];

export default routes;
