import HomePage from "../pages/HomePage.vue";
import CommandsPage from "../pages/CommandsPage.vue";
import ResourcesPage from "../pages/ResourcesPage.vue";
import CommitsPage from "../pages/CommitsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
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
    name: "Commits",
    path: "/commits",
    component: CommitsPage,
    meta: {
      icon: "mdi:message",
    },
  },
  {
    name: "Not Found",
    path: "/:catchAll(.*)",
    component: NotFoundPage,
    meta: {
      icon: "mdi:message",
    },
  },
];

export default routes;
