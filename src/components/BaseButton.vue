<template>
  <component :is="type" class="btn">
    <slot></slot>
  </component>
</template>

<script setup>
import { computed, useAttrs } from "vue";
// https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs
const attrs = useAttrs();
const type = computed(() => (attrs.href ? "a" : "button"));
</script>

<style lang="scss" scoped></style>
