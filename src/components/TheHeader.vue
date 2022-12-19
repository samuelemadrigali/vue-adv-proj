<template>
  <header class="bg-light mb-3">
    <nav class="navbar navbar-expand-lg container">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'HomePage' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item" v-if="!isLogged">
          <router-link class="nav-link" :to="{ name: 'SigninPage' }"
            >Registrazione</router-link
          >
        </li>
        <li v-if="!isLogged">
          <router-link class="nav-link" :to="{ name: 'LoginPage' }"
            >Login</router-link
          >
        </li>
        <li class="nav-item" v-if="isLogged">
          <router-link class="nav-link" :to="{ name: 'AdminHomePage' }"
            >Dashboard</router-link
          >
        </li>
      </ul>
      <BaseButton v-if="isLogged" class="btn-secondary" @click="logout"
        >Logout</BaseButton
      >
    </nav>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/UserStore";
import BaseButton from "./BaseButton.vue";

const UserStore = useUserStore();
const { isLogged } = storeToRefs(UserStore);
const { logout } = UserStore;
</script>

<style lang="scss" scoped></style>
