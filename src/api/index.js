import axiosClient from "./clients/axiosClient";
import User from "./repositories/User";
import Product from "./repositories/Product";
import Category from "./repositories/Category";

const user = new User(axiosClient);
const product = new Product(axiosClient, "products");
const category = new Category(axiosClient, "categories");

export { user, product, category };
