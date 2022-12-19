export const storage = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return localStorage.getItem(key);
    }
  },
  add(key, payload) {
    if (typeof payload === "object") {
      localStorage.setItem(key, JSON.stringify(payload));
    } else {
      localStorage.setItem(key, payload);
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  removeAll() {
    localStorage.clear();
  },
};
