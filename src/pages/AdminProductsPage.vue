<template>
  <h1>Prodotti</h1>
  <section class="mt-4">
    <h3>Lista</h3>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Immagine</th>
          <th>Nome</th>
          <th>Prezzo</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in items" :key="product.id">
          <td>{{ product.id }}</td>
          <td><img height="100" :src="product.image" alt="" /></td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="mt-4">
    <h3>Aggiungi Prodotto</h3>
    <form @submit.prevent="onSubmitForm">
      <div>
        <BaseInput
          label="Nome Prodotto"
          id="product-name"
          type="text"
          placeholder="Inserisci il nome del prodotto"
          v-model="formData.name"
          required
        />
      </div>
      <div>
        <BaseInput
          label="Image"
          id="product-image"
          type="text"
          placeholder="Inserisci l'url dell'immagine"
          v-model="formData.image"
        />
      </div>
      <div>
        <BaseInput
          label="Prezzo Prodotto"
          id="product-price"
          type="number"
          v-model="formData.price"
        />
      </div>
      <div class="mt-3">
        <BaseButton type="submit" class="btn-primary">Crea</BaseButton>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../store/ProductStore";
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";

const { items } = storeToRefs(useProductStore());
const { fetchItems, addProduct } = useProductStore();
fetchItems();

// Aggiunta prodotto
const formData = ref({
  name: "",
  price: 0,
  image: "https://via.placeholder.com/350",
});

const onSubmitForm = () => {
  addProduct(formData.value);
  formData.value = {
    name: "",
    price: 0,
    image: "https://via.placeholder.com/350",
  };
};
</script>

<style lang="scss" scoped></style>
