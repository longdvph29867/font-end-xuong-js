import Home from "./pages/home";
import Login from "./pages/login";
import { render,router } from "./utilities";
import ShopPage from "./pages/shop";
import Register from "./pages/register";
const app = document.querySelector('#app');

router.on("/", () => {
    render(Home, app);
  });

router.on("/login", () => {
  render(Login, app);
});

router.on("/shop", () => {
  render(ShopPage, app);
});


router.on("/register", () => {
  render(Register, app);
});
router.resolve();
// setupCounter(document.querySelector('#counter'))

