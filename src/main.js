import Home from "./pages/home";
import Login from "./pages/login";
import { render,router } from "./utilities";
import ShopPage from "./pages/shop";
import Register from "./pages/register";
import ProductsPage from "./pages/productsPage";
import DetailsPage from "./pages/detailsPage";
import Categories from "./pages/admin/categories";
import CategoriesAdd from "./pages/admin/categories-add";
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


router.on("/categories/:slug", ({data}) => render(() => ProductsPage(data), app));
router.on("/products", () => render(ProductsPage, app));
router.on("/details/:id", ({data}) => render(() => DetailsPage(data), app));

// admin
router.on("/admin/categories", () => {
  render(Categories, app);
});
router.on("/admin/categories/add", () => {
  render(CategoriesAdd, app);
});


router.resolve();
// setupCounter(document.querySelector('#counter'))

