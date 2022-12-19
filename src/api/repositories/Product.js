import BaseCrud from "./BaseCrud";
export default class Product extends BaseCrud {
  readAllByCategory(id) {
    return this._apiClient.get(`/${this._resource}?categoryId=${id}`);
  }
}
