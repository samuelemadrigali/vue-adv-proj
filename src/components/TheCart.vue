<template>
  <div>
    <h4 class="text-center">Il Carrello</h4>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="removeItem(item.id)">&#10060;</button>
      </li>
    </ul>
    <div>
      <h4>Totale</h4>
      {{ getTotal }} €
    </div>
    <PaypalButton />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/CartStore";

const { items, getTotal } = storeToRefs(useCartStore());
const { removeItem } = useCartStore();
</script>

<style lang="scss" scoped></style>
