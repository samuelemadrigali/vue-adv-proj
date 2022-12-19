<template>
  <TheHeader />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<style lang="scss" scoped></style>
