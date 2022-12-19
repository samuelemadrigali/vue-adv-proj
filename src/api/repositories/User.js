export default class User {
  _apiClient;
  constructor(apiClient) {
    this._apiClient = apiClient;
  }
  register(payload) {
    return this._apiClient.post("/register", payload);
  }
  login(payload) {
    return this._apiClient.post("/login", payload);
  }
}
