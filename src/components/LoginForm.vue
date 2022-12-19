<template>
  <form @submit.prevent="onSubmitForm">
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
    <BaseButton class="mt-3 btn-primary">Accedi</BaseButton>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/UserStore";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";

const { login } = useUserStore();

const formData = ref({
  email: "",
  password: "",
});
const onSubmitForm = () => {
  // richiamo la action dello store
  login(formData.value);
  // svuoto i campi
  formData.value = {
    email: "",
    password: "",
  };
};
</script>

<style scoped></style>
