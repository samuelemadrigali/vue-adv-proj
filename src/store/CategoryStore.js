import { defineStore } from "pinia";
import { category } from "../api";

export const useCategoryStore = defineStore("CategoryStore", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    async fetchItems() {
      try {
        const { data } = await category.readAll();
        this.items = data;
      } catch (error) {
        throw error;
      }
    },
    async fetchItem(id) {
      try {
        const { data } = await category.read(id);
        this.items = data;
      } catch (error) {
        throw error;
      }
    },
  },
  getters: {
    getCategoryName: (state) => {
      return (id) => state.items.find((cat) => cat.id === id)?.name;
    },
  },
});
