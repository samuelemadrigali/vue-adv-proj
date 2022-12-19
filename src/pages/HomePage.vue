<template>
  <h1>Home page</h1>
  <div class="row">
    <div class="col-8">
      <SectionProducts />
    </div>
    <div class="col-4">
      <TheCart />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "../store/ProductStore";
import TheCart from "../components/TheCart.vue";
import SectionProducts from "../components/SectionProducts.vue";

const { fetchItems } = useProductStore();
fetchItems();
</script>

<style lang="scss" scoped></style>
