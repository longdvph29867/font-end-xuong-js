import Home from "./page/home";
import Login from "./page/login";
import { render,router } from "./utilities";
const app = document.querySelector('#app');

router.on("/", () => {
    render(Home, app);
  });

router.on("/login", () => {
  render(Login, app);
});

router.resolve();
// setupCounter(document.querySelector('#counter'))

