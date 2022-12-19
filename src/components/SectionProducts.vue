<template>
  <section>
    <h2>Lista Prodotti</h2>
    <div class="row gy-4">
      <div class="col-6" v-for="product in items" :key="product.id">
        <BaseCard>
          <template v-slot:media>
            <img
              :src="product.image"
              class="card-img-top"
              :alt="product.name"
            />
          </template>
          <template v-slot:body>
            <small>
              <router-link
                v-if="product.categoryId"
                :to="{
                  name: 'CategoryPage',
                  params: { id: product.categoryId },
                }"
                >{{ getCategoryName(product.categoryId) }}</router-link
              >
            </small>
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              Prezzo:<strong></strong> {{ product.price }}€
            </p>
            <div>
              <router-link
                :to="{ name: 'ProductPage', params: { id: product.id } }"
                class="btn-primary"
                >Visualizza prodotto</router-link
              >
            </div>
            <div>
              <BaseButton @click="addToCart(product)" class="mt-3 btn-success"
                >Aggiungi a carrello</BaseButton
              >
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../store/ProductStore";
import { useCategoryStore } from "../store/CategoryStore";
import { useCartStore } from "../store/CartStore";

import BaseCard from "./BaseCard.vue";
import BaseButton from "./BaseButton.vue";

const { items } = storeToRefs(useProductStore());

const categoryStore = useCategoryStore();
const { getCategoryName } = useCategoryStore();
categoryStore.fetchItems();

const { addItem } = useCartStore();
const addToCart = (product) => {
  addItem(product);
};
</script>

<style lang="scss" scoped></style>
