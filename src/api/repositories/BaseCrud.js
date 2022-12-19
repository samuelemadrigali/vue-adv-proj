export default class BaseCrud {
  _apiClient;
  _resource;
  constructor(apiClient, resource) {
    this._apiClient = apiClient;
    this._resource = resource;
  }
  create(payload) {
    return this._apiClient.post(`/${this._resource}`, payload);
  }
  read(id) {
    return this._apiClient.get(`/${this._resource}/${id}`);
  }
  readAll() {
    return this._apiClient.get(`/${this._resource}`);
  }
  update(payload, id) {
    return this._apiClient.put(`/${this._resource}/${id}`, payload);
  }
  delete(id) {
    return this._apiClient.delete(`/${this._resource}/${id}`);
  }
}
