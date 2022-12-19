<template>
  <div>
    <h1>{{ items.name }}</h1>
    <img :src="items.image" :alt="items.name" />
    <p>Prezzo {{ items.price }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useProductStore } from "../store/ProductStore";

const route = useRoute();
const { items } = storeToRefs(useProductStore());
const { fetchItem } = useProductStore();

fetchItem(route.params.id);
</script>

<style lang="scss" scoped></style>
