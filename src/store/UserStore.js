import { defineStore } from "pinia";
import { user } from "../api";
import router from "../router";
import { storage } from "../helpers/storage";

export const useUserStore = defineStore("UserStore", {
  state() {
    return {
      user: storage.get("user"),
    };
  },
  getters: {
    isLogged() {
      return this.user ? true : false;
    },
  },
  actions: {
    async signin(payload) {
      try {
        const { data } = await user.register(payload);
        this.user = data.user;
        storage.add("token", data.accessToken);
        storage.add("user", data.user);
        router.push({ name: "AdminHomePage" });
      } catch (error) {
        throw error;
      }
    },
    async login(payload) {
      try {
        const { data } = await user.login(payload);
        this.user = data.user;
        storage.add("token", data.accessToken);
        storage.add("user", data.user);
        router.push({ name: "AdminHomePage" });
      } catch (error) {
        throw error;
      }
    },
    logout() {
      storage.removeAll();
      this.user = null;
      router.push({ name: "LoginPage" });
    },
  },
});
