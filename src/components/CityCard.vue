<template>
  <div>
    <h1>{{ city.city }}</h1>
  </div>
</template>

<script setup>
defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
