<template>
  <h1>Dashboard</h1>
  <p>
    Benvenuto {{ user?.firstName }} 😊, inizia gestire i
    <router-link :to="{ name: 'AdminProductsPage' }">prodotti</router-link> del
    tuo e-commerce.
  </p>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/UserStore";

const { user } = storeToRefs(useUserStore());
</script>

<style lang="scss" scoped></style>
