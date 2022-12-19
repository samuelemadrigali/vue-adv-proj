<template>
  <div>
    <h1>{{ categoryStore.items.name }}</h1>
    <div class="row gy-4">
      <div
        class="col-4"
        v-for="product in productStore.items"
        :key="product.id"
      >
        <BaseCard>
          <template v-slot:media>
            <img
              :src="product.image"
              class="card-img-top"
              :alt="product.name"
            />
          </template>
          <template v-slot:body>
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              Prezzo:<strong></strong> {{ product.price }}€
            </p>
            <router-link
              :to="{ name: 'ProductPage', params: { id: product.id } }"
              class="btn-primary"
              >Visualizza</router-link
            >
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useProductStore } from "../store/ProductStore";
import { useCategoryStore } from "../store/CategoryStore";
import BaseCard from "../components/BaseCard.vue";

const route = useRoute();

const categoryStore = useCategoryStore();
const productStore = useProductStore();
productStore.fetchItemsByCat(route.params.id);
// const category = storeToRefs(categoryStore.items);
categoryStore.fetchItem(route.params.id);
</script>

<style lang="scss" scoped></style>
