import { createApp } from 'vue';
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el); // show a component inside the DOM, vue setup
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root-isolation-only');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount }; // for container, not in isolation mode