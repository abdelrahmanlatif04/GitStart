import HomePage from "../pages/HomePage.vue";
import ChatBotPage from "../pages/ChatBotPage.vue";
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
    name: "Chatbot",
    path: "/chatbot",
    component: ChatBotPage,
    meta: {
      icon: "mdi:robot-happy",
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
