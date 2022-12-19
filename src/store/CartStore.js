import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    addItem(payload) {
      this.items.push(payload);
    },
    removeItem(id) {
      const index = this.items.findIndex((item) => item.id == id);
      this.items.splice(index, 1);
    },
  },
  getters: {
    getTotal() {
      return this.items.reduce((acc, obj) => acc + Number(obj.price), 0);
    },
  },
});
