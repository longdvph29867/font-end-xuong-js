import Home from "./pages/home";
import Login from "./pages/login";
import { render,router } from "./utilities";
import ShopPage from "./pages/shop";
import Register from "./pages/register";
import ProductsPage from "./pages/productsPage";
import DetailsPage from "./pages/detailsPage";
import AdminProductsPage from "./pages/admin/Products/products";
import AdminCategoriesPage from "./pages/admin/Categories/categories";
import AdminCategoriesAdd from "./pages/admin/Categories/categories-add";
import AdminProductsAdd from "./pages/admin/Products/products-add";
import AdminProductsEdit from "./pages/admin/Products/products-edit";
import AdminUsersPage from "./pages/admin/User/user";
import AdminUsersAdd from "./pages/admin/User/users-add";
import AdminUsersEdit from "./pages/admin/User/users-edit";
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
  render(AdminCategoriesPage, app);
});
router.on("/admin/categories/add", () => {
  render(AdminCategoriesAdd, app);
});

router.on("/admin/products", () => {
  render(AdminProductsPage, app);
});
router.on("/admin/products/add", () => {
  render(AdminProductsAdd, app);
});
router.on("/admin/products/edit/:id", ({data}) => render(() => AdminProductsEdit(data), app));

router.on("/admin/users", () => {
  render(AdminUsersPage, app);
});
router.on("/admin/users/add", () => {
  render(AdminUsersAdd, app);
});
router.on("/admin/users/edit/:id", ({data}) => render(() => AdminUsersEdit(data), app));



router.resolve();
// setupCounter(document.querySelector('#counter'))

