<template>
  <label :for="$attrs.id">
    {{ label }}
    <input
      v-bind="$attrs"
      class="form-control"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
// https://vuejs.org/api/options-misc.html#inheritattrs
export default {
  inheritAttrs: false,
};
</script>

<script setup>
defineProps({
  label: {
    type: String,
  },
  // https://vuejs.org/guide/extras/render-function.html#v-model
  modelValue: {
    type: [String, Number],
  },
});
</script>

<style lang="scss" scoped></style>
