<template>
  <form @submit.prevent="onSubmitForm">
    <div>
      <BaseInput
        label="Nome"
        id="first-name"
        type="text"
        placeholder="Inserisci nome"
        v-model="formData.firstName"
      />
    </div>
    <div>
      <BaseInput
        label="Email"
        id="email"
        type="email"
        placeholder="Inserisci email"
        v-model="formData.email"
      />
    </div>
    <div>
      <BaseInput
        label="Password"
        id="password"
        type="password"
        placeholder="Inserisci password"
        v-model="formData.password"
      />
    </div>
    <BaseButton class="mt-3 btn-primary">Registrati</BaseButton>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/UserStore";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";

const { signin } = useUserStore();

const formData = ref({
  firstName: "",
  email: "",
  password: "",
});
const onSubmitForm = () => {
  // richiamo la action dello store
  signin(formData.value);
  // svuoto i campi
  formData.value = {
    firstName: "",
    email: "",
    password: "",
  };
};
</script>

<style scoped></style>
