import { defineStore } from "pinia";
import { product } from "../api";

export const useProductStore = defineStore("ProductStore", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    async fetchItems() {
      try {
        const { data } = await product.readAll();
        this.items = data;
      } catch (error) {
        throw error;
      }
    },
    async fetchItemsByCat(id) {
      try {
        const { data } = await product.readAllByCategory(id);
        this.items = data;
      } catch (error) {
        throw error;
      }
    },
    async fetchItem(id) {
      try {
        const { data } = await product.read(id);
        this.items = data;
      } catch (error) {
        throw error;
      }
    },
    async addProduct(payload) {
      try {
        const { data } = await product.create(payload);
        this.items.push(data);
      } catch (error) {}
    },
  },
});
