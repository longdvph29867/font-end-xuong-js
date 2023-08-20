import Home from "./page/home";
import { render,router } from "./utilities";
const app = document.querySelector('#app');

router.on("/", () => {
    render(Home, app);
  });

router.resolve();
setupCounter(document.querySelector('#counter'))